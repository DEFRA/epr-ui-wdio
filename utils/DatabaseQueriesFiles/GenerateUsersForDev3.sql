DECLARE @UserEmailPrefix NVARCHAR(50) = 'areeb.mohammad+005+ViewTest'
DECLARE @UserEmailDomain NVARCHAR(50) = 'kainos.com'
DECLARE @OrganisationNamePrefix NVARCHAR(50) = 'RQ+005+ViewTest'

DROP TABLE IF EXISTS #TestOrgData;
DROP TABLE IF EXISTS #TestCSData;
DROP TABLE IF EXISTS #TestEnrolmentData;
DROP TABLE IF EXISTS #TempTable_GeneratedIds;
DROP TABLE IF EXISTS #TempTable_SelectedSchemes

CREATE TABLE #TestOrgData
(
	OrganisationTypeId INT,
	ProducerTypeId INT,
	IsComplianceScheme BIT,
	ValidatedWithCompaniesHouse BIT,
	Name NVARCHAR(200),
	Town NVARCHAR(100),
	Postcode NVARCHAR(10),
	NationId INT,
	UseComplianceScheme BIT,
	ExternalId UNIQUEIDENTIFIER
);

CREATE TABLE #TestCSData
(
	NationId INT,
	OperatorName NVARCHAR(200),
);

CREATE TABLE #TestEnrolmentData
(
	PersonIdentifier NVARCHAR(20),
	UserId UNIQUEIDENTIFIER,
	PersonRoleId INT,
	ServiceRoleId INT,
	EnrolmentStatusId INT,
	OrgName NVARCHAR(200)
);

CREATE TABLE #TempTable_GeneratedIds (
	UserIdGuid UNIQUEIDENTIFIER,
	GeneratedUserId INT,
	GeneratedPersonId INT,
	GeneratedPersonOrganisationConnectionId INT
);

CREATE TABLE #TempTable_SelectedSchemes (
	ProducerOrgExternalId UNIQUEIDENTIFIER,
	ProducerOrgId INT,
	OrganisationConnectionId INT,
	ComplianceSchemeOrgId INT,
	ComplianceSchemeOrgExternalId INT,
	ComplianceSchemeId INT,
	NationId INT
)

BEGIN TRY

	BEGIN TRANSACTION;  -- Wrap in TRANSACTION to rollback on error

	-- Populate the temporary table with your test org data
	INSERT INTO #TestOrgData (OrganisationTypeId, ProducerTypeId, IsComplianceScheme, ValidatedWithCompaniesHouse, Name, Town, Postcode, NationId, UseComplianceScheme, ExternalId)
	VALUES
		-- direct producers
		(1,4,0,0, @OrganisationNamePrefix + '1','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '2','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '3','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '4','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '5','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '6','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '7','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '8','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '9','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '10','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '11','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '12','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '13','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '14','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '15','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '16','London','LN1 1LN', 2, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '17','London','LN1 1LN', 3, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '18','London','LN1 1LN', 3, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '19','London','LN1 1LN', 3, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '20','London','LN1 1LN', 3, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '21','London','LN1 1LN', 3, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '22','London','LN1 1LN', 3, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '23','London','LN1 1LN', 3, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '24','London','LN1 1LN', 3, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '25','London','LN1 1LN', 4, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '26','London','LN1 1LN', 4, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '27','London','LN1 1LN', 4, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '28','London','LN1 1LN', 4, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '29','London','LN1 1LN', 4, 0, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '30','London','LN1 1LN', 4, 0, NEWID()),
		
		-- producers using CS		
		(1,4,0,0, @OrganisationNamePrefix + '31','London','LN1 1LN', 1, 2, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '32','London','LN1 1LN', 2, 2, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '33','London','LN1 1LN', 3, 2, NEWID()),
		(1,4,0,0, @OrganisationNamePrefix + '34','London','LN1 1LN', 4, 2, NEWID()),

		-- CS operators
		(1,5,1,0, @OrganisationNamePrefix + 'CSO1','London','LN1 1LN', 0, 0, NEWID()),
		(1,5,1,0, @OrganisationNamePrefix + 'CSO2','London','LN1 1LN', 0, 0, NEWID()),
		(1,5,1,0, @OrganisationNamePrefix + 'CSO3','London','LN1 1LN', 0, 0, NEWID()),
		(1,5,1,0, @OrganisationNamePrefix + 'CSO4','London','LN1 1LN', 0, 0, NEWID())
			
	-- Insert Organisations directly from #TestOrgData
	INSERT INTO [dbo].[Organisations] (OrganisationTypeId, ProducerTypeId, IsComplianceScheme, ValidatedWithCompaniesHouse, Name, Town, Postcode, NationId, IsDeleted, ReferenceNumber, CreatedOn, LastUpdatedOn, ExternalId, CompaniesHouseNumber)
	SELECT
		OrganisationTypeId,
		ProducerTypeId,
		IsComplianceScheme,
		ValidatedWithCompaniesHouse,
		Name,
		Town,
		Postcode,
		NationId,
		0,
		RIGHT('00000' + CAST((SELECT MAX(Id) FROM [dbo].[Organisations]) + ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS VARCHAR(6)), 6), -- Generate 6-digit reference number
		GETDATE(),
		GETDATE(),
		ExternalId,
		CASE WHEN IsComplianceScheme = 1 THEN LEFT(REPLACE(CONVERT(NVARCHAR(36), NEWID()), '-', ''), 9) ELSE '' END
	FROM #TestOrgData;

	-- Populate the temporary table with your test org data
	INSERT INTO #TestCSData (OperatorName, NationId)
	VALUES
		-- CS operator 1
		(@OrganisationNamePrefix + 'CSO1', 1),
		(@OrganisationNamePrefix + 'CSO1', 2),
		(@OrganisationNamePrefix + 'CSO1', 3),
		(@OrganisationNamePrefix + 'CSO1', 4),
		-- CS operator 2
		(@OrganisationNamePrefix + 'CSO2', 1),
		(@OrganisationNamePrefix + 'CSO2', 2),
		(@OrganisationNamePrefix + 'CSO2', 3),
		(@OrganisationNamePrefix + 'CSO2', 4),
		-- CS operator 3
		(@OrganisationNamePrefix + 'CSO3', 1),
		(@OrganisationNamePrefix + 'CSO3', 2),
		(@OrganisationNamePrefix + 'CSO3', 3),
		(@OrganisationNamePrefix + 'CSO3', 4),
		-- CS operator 4
		(@OrganisationNamePrefix + 'CSO4', 1),
		(@OrganisationNamePrefix + 'CSO4', 2),
		(@OrganisationNamePrefix + 'CSO4', 3),
		(@OrganisationNamePrefix + 'CSO4', 4)

	INSERT INTO [dbo].[ComplianceSchemes] (Name, CompaniesHouseNumber, NationId)
	SELECT
		o.Name + ' ' + CONVERT(NVARCHAR(255), t.NationId),
		o.CompaniesHouseNumber,
		t.NationId
	FROM #TestCSData t
	INNER JOIN [dbo].[Organisations] o ON o.Name = t.OperatorName


	-- Populate the temporary table with your test enrolment data
	INSERT INTO #TestEnrolmentData (PersonIdentifier, UserId, PersonRoleId, ServiceRoleId, EnrolmentStatusId, OrgName) 
	VALUES
		-- Org 1: 1 AP (pending), 1 DP (pending) 
		('Org1AP', NEWID(), 1, 1, 2, @OrganisationNamePrefix + '1'),
		('Org1DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '1'),
		-- Org 2: 1 AP (pending), 1 DP (pending) 
		('Org2AP', NEWID(), 1, 1, 2, @OrganisationNamePrefix + '2'),
		('Org2DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '2'),
		-- Org 3: 1 AP (pending), 1 DP (pending) 
		('Org3AP', NEWID(), 1, 1, 2, @OrganisationNamePrefix + '3'),
		('Org3DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '3'),
		-- Org 4: 1 AP (pending), 1 DP (pending) 
		('Org4AP', NEWID(), 1, 1, 2, @OrganisationNamePrefix + '4'),
		('Org4DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '4'),
		-- Org 5: 1 AP (pending), 1 DP (pending) 
		('Org5AP', NEWID(), 1, 1, 2, @OrganisationNamePrefix + '5'),
		('Org5DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '5'),
		-- Org 6: 1 AP (approved), 1 DP (approved) 
		('Org6AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '6'),
		('Org6DP1', NEWID(), 1, 2, 3, @OrganisationNamePrefix + '6'),
		-- Org 7: 1 AP (approved), 1 DP (approved) 
		('Org7AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '7'),
		('Org7DP1', NEWID(), 1, 2, 3, @OrganisationNamePrefix + '7'),
		-- Org 8: 1 AP (approved), 1 DP (approved) 
		('Org8AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '8'),
		('Org8DP1', NEWID(), 1, 2, 3, @OrganisationNamePrefix + '8'),
		-- Org 9: 1 AP (approved), 1 DP (approved) 
		('Org9AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '9'),
		('Org9DP1', NEWID(), 1, 2, 3, @OrganisationNamePrefix + '9'),
		-- Org 10: 1 AP (approved), 1 DP (approved) 
		('Org10AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '10'),
		('Org10DP1', NEWID(), 1, 2, 3, @OrganisationNamePrefix + '10'),

		-- Org 11: 1 AP (approved), 1 DP (pending) 
		('Org11AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '11'),
		('Org11DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '11'),
		-- Org 12: 1 AP (approved), 1 DP (pending) 
		('Org12AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '12'),
		('Org12DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '12'),
		-- Org 13: 1 AP (approved), 1 DP (pending) 
		('Org13AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '13'),
		('Org13DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '13'),
		-- Org 14: 1 AP (approved), 1 DP (pending) 
		('Org14AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '14'),
		('Org14DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '14'),
		-- Org 15: 1 AP (approved), 1 DP (pending) 
		('Org15AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '15'),
		('Org15DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '15'),

		-- Org 16: 1 AP (approved), 1 DP (approved), 1 DP (pending)
		('Org16AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '16'),
		('Org16DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '16'),
		('Org16DP2', NEWID(), 1, 2, 3, @OrganisationNamePrefix + '16'),
		-- Org 17: 1 AP (approved), 1 DP (approved), 1 DP (pending)
		('Org17AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '17'),
		('Org17DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '17'),
		('Org17DP2', NEWID(), 1, 2, 3, @OrganisationNamePrefix + '17'),
		-- Org 18: 1 AP (approved), 1 DP (approved), 1 DP (pending)
		('Org18AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '18'),
		('Org18DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '18'),
		('Org18DP2', NEWID(), 1, 2, 3, @OrganisationNamePrefix + '18'),
		-- Org 19: 1 AP (approved), 1 DP (approved), 1 DP (pending)
		('Org19AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '19'),
		('Org19DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '19'),
		('Org19DP2', NEWID(), 1, 2, 3, @OrganisationNamePrefix + '19'),
		-- Org 20: 1 AP (approved), 1 DP (approved), 1 DP (pending)
		('Org20AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '20'),
		('Org20DP1', NEWID(), 1, 2, 2, @OrganisationNamePrefix + '20'),
		('Org20DP2', NEWID(), 1, 2, 3, @OrganisationNamePrefix + '20'),

		-- Org 21: 1 AP (approved)
		('Org21AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '21'),
		-- Org 22: 1 AP (approved)
		('Org22AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '22'),
		-- Org 23: 1 AP (approved)
		('Org23AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '23'),
		-- Org 24: 1 AP (approved)
		('Org24AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '24'),
		-- Org 25: 1 AP (approved)
		('Org25AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '25'),

		-- Org 26: 1 AP (pending)
		('Org26AP', NEWID(), 1, 1, 2, @OrganisationNamePrefix + '26'),
		-- Org 27: 1 AP (pending)
		('Org27AP', NEWID(), 1, 1, 2, @OrganisationNamePrefix + '27'),
		-- Org 28: 1 AP (pending)
		('Org28AP', NEWID(), 1, 1, 2, @OrganisationNamePrefix + '28'),
		-- Org 29: 1 AP (pending)
		('Org29AP', NEWID(), 1, 1, 2, @OrganisationNamePrefix + '29'),
		-- Org 30: 1 AP (pending)
		('Org30AP', NEWID(), 1, 1, 2, @OrganisationNamePrefix + '30'),

		-- enrolments for producers using CS
		-- Org 31: 1 AP (approved)
		('Org31AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '31'),
		-- Org 32: 1 AP (approved)
		('Org32AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '32'),
		-- Org 33: 1 AP (approved)
		('Org33AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '33'),
		-- Org 34: 1 AP (approved)
		('Org34AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + '34'),

		-- enrolments for CS operators
		-- Org CSO1: 1 AP (approved)
		('OrgCSO1AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + 'CSO1'),
		-- Org CSO2: 1 AP (approved)
		('OrgCSO2AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + 'CSO2'),
		-- Org CSO3: 1 AP (approved)
		('OrgCSO3AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + 'CSO3'),
		-- Org CSO4: 1 AP (approved)
		('OrgCSO4AP', NEWID(), 1, 1, 3, @OrganisationNamePrefix + 'CSO4')
	

	-- Insert Users and capture the generated UserIds
	INSERT INTO [dbo].[Users] (UserId, Email, IsDeleted)
		SELECT
			UserId,
			@UserEmailPrefix + PersonIdentifier + '@' + @UserEmailDomain,
			0
		FROM #TestEnrolmentData;

	-- Insert #TempTable_GeneratedIds using the data from #TempTable_InsertedUsers
	INSERT INTO #TempTable_GeneratedIds (UserIdGuid, GeneratedUserId)
		SELECT
			u.UserId,
			u.Id
		FROM [dbo].[Users] u
		INNER JOIN #TestEnrolmentData t ON t.UserId = u.UserId

	-- Insert into [dbo].[Persons] and capture the output
	INSERT INTO [dbo].[Persons] (Email, Telephone, FirstName, LastName, UserId, IsDeleted, ExternalId, CreatedOn, LastUpdatedOn)
		SELECT
			@UserEmailPrefix + PersonIdentifier + '@' + @UserEmailDomain,
			'01234567890',
			PersonIdentifier,
			'Lastname',
			g.GeneratedUserId,
			0,
			NEWID(),
			GETDATE(),
			GETDATE()
		FROM #TestEnrolmentData t
		JOIN #TempTable_GeneratedIds g ON g.UserIdGuid = t.UserId

	-- Update #TempTable_GeneratedIds using the data from #TempTable_InsertedPersons
	UPDATE g
	SET GeneratedPersonId = p.Id
	FROM #TempTable_GeneratedIds g
	LEFT JOIN [dbo].[Persons] p ON p.UserId = g.GeneratedUserId

	-- Insert into PersonOrganisationConnections and capture the generated ConnectionIds
	INSERT INTO [dbo].[PersonOrganisationConnections] (OrganisationRoleId, PersonRoleId, OrganisationId, PersonId, IsDeleted, ExternalId, CreatedOn, LastUpdatedOn)
		SELECT
			1,
			t.PersonRoleId,
			o.Id,
			g.GeneratedPersonId,
			0,
			NEWID(),
			GETDATE(),
			GETDATE()
		FROM #TempTable_GeneratedIds g
		JOIN #TestEnrolmentData t on t.UserId = g.UserIdGuid
		INNER JOIN [dbo].[Organisations] o ON o.Name = t.OrgName

	-- Update #TempTable_GeneratedIds using the data from @InsertedConnections
	UPDATE g
	SET GeneratedPersonOrganisationConnectionId = poc.Id
	FROM #TempTable_GeneratedIds g
	JOIN #TestEnrolmentData t on t.UserId = g.UserIdGuid
	JOIN [dbo].[Organisations] o ON o.Name = t.OrgName
	JOIN [dbo].[PersonOrganisationConnections] poc ON poc.PersonId = g.GeneratedPersonId AND poc.OrganisationId = o.Id

	-- Insert into Enrolments using the captured ConnectionIds
	INSERT INTO [dbo].[Enrolments] (ExternalId, ServiceRoleId, EnrolmentStatusId, ConnectionId, IsDeleted, CreatedOn, LastUpdatedOn)
		SELECT
			NEWID(),
			t.ServiceRoleId,
			t.EnrolmentStatusId,
			g.GeneratedPersonOrganisationConnectionId,
			0,
			GETDATE(),
			GETDATE()
		FROM #TestEnrolmentData t
		JOIN #TempTable_GeneratedIds g ON t.UserId = g.UserIdGuid;
	
	-- Insert #TempTable_SelectedSchemes
	INSERT INTO #TempTable_SelectedSchemes (ProducerOrgExternalId, ProducerOrgId, NationId, ComplianceSchemeOrgId)
	SELECT
		t.ExternalId,
		o.Id,
		t.NationId,
		randomOrg.Id
	FROM Organisations o
	JOIN #TestOrgData t ON t.ExternalId = o.ExternalId
	CROSS APPLY (
		SELECT TOP 1 o_inner.Id
		FROM Organisations o_inner
		JOIN #TestOrgData t_inner ON o_inner.ExternalId = t_inner.ExternalId
		WHERE t_inner.IsComplianceScheme=1
			  AND o_inner.Id <> o.Id -- Artificial correlation added here
		ORDER BY NEWID(), ROW_NUMBER() OVER (PARTITION BY o.Id ORDER BY o.Id) -- Adding row number as an additional sort column
	) AS randomOrg
	WHERE t.UseComplianceScheme=1

	-- Select Compliance Scheme Operator connection for orgs configured to CS
	INSERT INTO [dbo].[OrganisationsConnections] 
		(FromOrganisationId, FromOrganisationRoleId, ToOrganisationId, ToOrganisationRoleId)
	SELECT
		ProducerOrgId, -- producer Org Id
		1, -- producer org type id
		ComplianceSchemeOrgId,
		2 -- compliance scheme or type id
	FROM #TempTable_SelectedSchemes tss
	JOIN [dbo].[Organisations] o ON o.ExternalId = tss.ProducerOrgExternalId

	UPDATE t
	SET
		OrganisationConnectionId = oc.Id
	FROM #TempTable_SelectedSchemes t
	INNER JOIN OrganisationsConnections oc ON oc.FromOrganisationId = t.ProducerOrgId

	-- get compliance scheme from operator for nation
	UPDATE t
	SET
		ComplianceSchemeId = (
			SELECT TOP 1 cs.Id
			FROM ComplianceSchemes cs
			INNER JOIN Organisations o ON o.CompaniesHouseNumber = cs.CompaniesHouseNumber
			WHERE t.NationId = cs.NationId
    )
	FROM #TempTable_SelectedSchemes t

	-- Add SelectedScheme for CS using producers
	INSERT INTO [dbo].[SelectedSchemes] (OrganisationConnectionId, ComplianceSchemeId)
		SELECT
			t.OrganisationConnectionId,
			t.ComplianceSchemeId
	FROM #TempTable_SelectedSchemes t	

	COMMIT; -- Commit here, if successful to not leave partial test data on error

	DROP TABLE IF EXISTS #TestOrgData;
	DROP TABLE IF EXISTS #TestCSData;
	DROP TABLE IF EXISTS #TestEnrolmentData;
	DROP TABLE IF EXISTS #TempTable_GeneratedIds;
	DROP TABLE IF EXISTS #TempTable_SelectedSchemes

END TRY
BEGIN CATCH
    ROLLBACK;
	THROW;
END CATCH