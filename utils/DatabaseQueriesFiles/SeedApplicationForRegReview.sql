-- Set prefixes to identify test users via person email, and orgs via name

DECLARE @EmailPrefix NVARCHAR(50)
SET @EmailPrefix = 'carl.tildsley+OfflineTestOrg'

DECLARE @EmailDomain NVARCHAR(50)
SET @EmailDomain = 'kainos.com'

DECLARE @TestOrgPrefix NVARCHAR(50)
SET @TestOrgPrefix = 'Test_Reg_Applications'

-- Create temporary table to hold the test org data
CREATE TABLE #TestOrgData
(
 OrganisationTypeId INT,
 IsComplianceScheme BIT,
 ValidatedWithCompaniesHouse BIT,
 Name NVARCHAR(200),
 Town NVARCHAR(100),
 Postcode NVARCHAR(10),
 NationId INT
);

-- Populate the temporary table with your test org data
INSERT INTO #TestOrgData (OrganisationTypeId, IsComplianceScheme, ValidatedWithCompaniesHouse, Name, Town, Postcode, NationId)
VALUES 
 (1,0,0, @TestOrgPrefix + '1','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '2','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '3','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '4','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '5','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '6','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '7','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '8','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '9','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '10','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '11','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '12','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '13','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '14','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '15','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '16','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '17','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '18','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '19','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '20','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '21','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '22','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '23','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '24','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '25','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '26','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '27','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '28','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '29','London','LN1 1LN', 1),
 (1,0,0, @TestOrgPrefix + '30','London','LN1 1LN', 1)

DECLARE @CurrentOrganisationTypeId INT,
@CurrentIsComplianceScheme BIT,
@CurrentValidatedWithCompaniesHouse BIT,
@CurrentName NVARCHAR(200),
@CurrentTown NVARCHAR(100),
@CurrentPostcode NVARCHAR(10),
@CurrentNationId INT;

-- Define cursor
DECLARE testOrgCursor CURSOR FOR 
SELECT OrganisationTypeId, IsComplianceScheme, ValidatedWithCompaniesHouse, Name, Town, Postcode, NationId
FROM #TestOrgData;

-- Open cursor and fetch the first row
OPEN testOrgCursor;
FETCH NEXT FROM testOrgCursor INTO @CurrentOrganisationTypeId, @CurrentIsComplianceScheme, @CurrentValidatedWithCompaniesHouse, @CurrentName, @CurrentTown, @CurrentPostcode, @CurrentNationId

-- Loop through all rows in the cursor
WHILE @@FETCH_STATUS = 0
BEGIN
 -- Insert User
 INSERT INTO [dbo].[Organisations] (OrganisationTypeId,IsComplianceScheme,ValidatedWithCompaniesHouse,Name,Town,Postcode,NationId) 
 VALUES (@CurrentOrganisationTypeId, @CurrentIsComplianceScheme, @CurrentValidatedWithCompaniesHouse, @CurrentName, @CurrentTown, @CurrentPostcode, @CurrentNationId);
 
 -- Fetch the next row
 FETCH NEXT FROM testOrgCursor INTO @CurrentOrganisationTypeId, @CurrentIsComplianceScheme, @CurrentValidatedWithCompaniesHouse, @CurrentName, @CurrentTown, @CurrentPostcode, @CurrentNationId;
END;

-- Cleanup
CLOSE testOrgCursor;
DEALLOCATE testOrgCursor;
DROP TABLE #TestOrgData;

-- Create temporary table to hold the test data
CREATE TABLE #TestEnrolmentData
(
 PersonIdentifier NVARCHAR(20),
 UserId UNIQUEIDENTIFIER,
 PersonRoleId INT,
 ServiceRoleId INT,
 EnrolmentStatusId INT,
 OrgName NVARCHAR(200)
);

-- Populate the temporary table with your test enrolment data
INSERT INTO #TestEnrolmentData (PersonIdentifier, UserId, PersonRoleId, ServiceRoleId, EnrolmentStatusId, OrgName)
VALUES 
 -- Org 1: 1 AP (pending), 1 DP (pending) 
 ('Org1AP', NEWID(), 1, 1, 2, @TestOrgPrefix + '1'),
 ('Org1DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '1'),
 -- Org 2: 1 AP (pending), 1 DP (pending) 
 ('Org2AP', NEWID(), 1, 1, 2, @TestOrgPrefix + '2'),
 ('Org2DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '2'),
 -- Org 3: 1 AP (pending), 1 DP (pending) 
 ('Org3AP', NEWID(), 1, 1, 2, @TestOrgPrefix + '3'),
 ('Org3DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '3'),
 -- Org 4: 1 AP (pending), 1 DP (pending) 
 ('Org4AP', NEWID(), 1, 1, 2, @TestOrgPrefix + '4'),
 ('Org4DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '4'),
 -- Org 5: 1 AP (pending), 1 DP (pending) 
 ('Org5AP', NEWID(), 1, 1, 2, @TestOrgPrefix + '5'),
 ('Org5DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '5'),
 
 -- Org 6: 1 AP (approved), 1 DP (approved) 
 ('Org6AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '6'),
 ('Org6DP1', NEWID(), 1, 2, 3, @TestOrgPrefix + '6'),
 -- Org 7: 1 AP (approved), 1 DP (approved) 
 ('Org7AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '7'),
 ('Org7DP1', NEWID(), 1, 2, 3, @TestOrgPrefix + '7'),
 -- Org 8: 1 AP (approved), 1 DP (approved) 
 ('Org8AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '8'),
 ('Org8DP1', NEWID(), 1, 2, 3, @TestOrgPrefix + '8'),
 -- Org 9: 1 AP (approved), 1 DP (approved) 
 ('Org9AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '9'),
 ('Org9DP1', NEWID(), 1, 2, 3, @TestOrgPrefix + '9'),
 -- Org 10: 1 AP (approved), 1 DP (approved) 
 ('Org10AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '10'),
 ('Org10DP1', NEWID(), 1, 2, 3, @TestOrgPrefix + '10'),
 
 -- Org 11: 1 AP (approved), 1 DP (pending) 
 ('Org11AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '11'),
 ('Org11DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '11'),
 -- Org 12: 1 AP (approved), 1 DP (pending) 
 ('Org12AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '12'),
 ('Org12DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '12'),
 -- Org 13: 1 AP (approved), 1 DP (pending) 
 ('Org13AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '13'),
 ('Org13DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '13'),
 -- Org 14: 1 AP (approved), 1 DP (pending) 
 ('Org14AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '14'),
 ('Org14DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '14'),
 -- Org 15: 1 AP (approved), 1 DP (pending) 
 ('Org15AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '15'),
 ('Org15DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '15'),
 
 -- Org 16: 1 AP (approved), 1 DP (approved), 1 DP (pending)
 ('Org16AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '16'),
 ('Org16DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '16'),
 ('Org16DP2', NEWID(), 1, 2, 3, @TestOrgPrefix + '16'),
 -- Org 17: 1 AP (approved), 1 DP (approved), 1 DP (pending)
 ('Org17AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '17'),
 ('Org17DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '17'),
 ('Org17DP2', NEWID(), 1, 2, 3, @TestOrgPrefix + '17'),
 -- Org 18: 1 AP (approved), 1 DP (approved), 1 DP (pending)
 ('Org18AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '18'),
 ('Org18DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '18'),
 ('Org18DP2', NEWID(), 1, 2, 3, @TestOrgPrefix + '18'),
 -- Org 19: 1 AP (approved), 1 DP (approved), 1 DP (pending)
 ('Org19AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '19'),
 ('Org19DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '19'),
 ('Org19DP2', NEWID(), 1, 2, 3, @TestOrgPrefix + '19'),
 -- Org 20: 1 AP (approved), 1 DP (approved), 1 DP (pending)
 ('Org20AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '20'),
 ('Org20DP1', NEWID(), 1, 2, 2, @TestOrgPrefix + '20'),
 ('Org20DP2', NEWID(), 1, 2, 3, @TestOrgPrefix + '20'),
 
 -- Org 21: 1 AP (approved)
 ('Org21AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '21'),
 -- Org 22: 1 AP (approved)
 ('Org22AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '22'),
 -- Org 23: 1 AP (approved)
 ('Org23AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '23'),
 -- Org 24: 1 AP (approved)
 ('Org24AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '24'),
 -- Org 25: 1 AP (approved)
 ('Org25AP', NEWID(), 1, 1, 3, @TestOrgPrefix + '25'),
 
 -- Org 26: 1 AP (pending)
 ('Org26AP', NEWID(), 1, 1, 2, @TestOrgPrefix + '26'),
 -- Org 27: 1 AP (pending)
 ('Org27AP', NEWID(), 1, 1, 2, @TestOrgPrefix + '27'),
 -- Org 28: 1 AP (pending)
 ('Org28AP', NEWID(), 1, 1, 2, @TestOrgPrefix + '28'),
 -- Org 29: 1 AP (pending)
 ('Org29AP', NEWID(), 1, 1, 2, @TestOrgPrefix + '29'),
 -- Org 30: 1 AP (pending)
 ('Org30AP', NEWID(), 1, 1, 2, @TestOrgPrefix + '30')
 

DECLARE @CurrentPersonIdentifier NVARCHAR(20),
@CurrentUserId UNIQUEIDENTIFIER,
@CurrentPersonRoleId INT,
@CurrentServiceRoleId INT,
@CurrentEnrolmentStatusId INT, 
@CurrentOrgName NVARCHAR(200),
@LastAddedUserId INT,
@LastAddedPersonId INT,
@LastAddedPersonOrgConnectionId INT,
@CurrentOrgId INT;

-- Define cursor
DECLARE testEnrolmentCursor CURSOR FOR 
SELECT PersonIdentifier, UserId, PersonRoleId, ServiceRoleId, EnrolmentStatusId, OrgName
FROM #TestEnrolmentData;

-- Open cursor and fetch the first row
OPEN testEnrolmentCursor;
FETCH NEXT FROM testEnrolmentCursor INTO @CurrentPersonIdentifier, @CurrentUserId, @CurrentPersonRoleId, @CurrentServiceRoleId, @CurrentEnrolmentStatusId, @CurrentOrgName

-- Loop through all rows in the cursor
WHILE @@FETCH_STATUS = 0
BEGIN
 -- Insert User
 INSERT INTO [dbo].[Users] (UserId, Email) 
 VALUES (@CurrentUserId, @CurrentPersonIdentifier);
 
 -- Get the generated userId
 SET @LastAddedUserId = SCOPE_IDENTITY();
 
 -- Insert person
 INSERT INTO [dbo].[Persons] (Email, Telephone, FirstName, LastName, UserId) 
 VALUES (@EmailPrefix + @CurrentPersonIdentifier + '@' + @EmailDomain, '01234567890', @CurrentPersonIdentifier,'Lastname', @LastAddedUserId);
 
 -- Get the generated personId
 SET @LastAddedPersonId = SCOPE_IDENTITY();
 
 -- Get/Add org by name
 SET @CurrentOrgId = 
(SELECT TOP 1 id 
FROM [dbo].[Organisations]
WHERE Name = @CurrentOrgName)

 INSERT INTO [dbo].[PersonOrganisationConnections](OrganisationRoleId,PersonRoleId,OrganisationId,PersonId)
VALUES(1,@CurrentPersonRoleId,@CurrentOrgId,@LastAddedPersonId)

 SET @LastAddedPersonOrgConnectionId=SCOPE_IDENTITY();
 
 INSERT INTO [dbo].[Enrolments] (ServiceRoleId, EnrolmentStatusId, ConnectionId) 
VALUES (@CurrentServiceRoleId,@CurrentEnrolmentStatusId,@LastAddedPersonOrgConnectionId)

 -- Fetch the next row
 FETCH NEXT FROM testEnrolmentCursor INTO @CurrentPersonIdentifier, @CurrentUserId, @CurrentPersonRoleId, @CurrentServiceRoleId, @CurrentEnrolmentStatusId, @CurrentOrgName;
END;

-- Cleanup
CLOSE testEnrolmentCursor;
DEALLOCATE testEnrolmentCursor;
DROP TABLE #TestEnrolmentData;
