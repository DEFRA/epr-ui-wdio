DECLARE @UserEmailPrefix NVARCHAR(50) = 'areeb.mohammad+005+ViewTest'
DECLARE @UserEmailDomain NVARCHAR(50) = 'kainos.com'
DECLARE @OrganisationNamePrefix NVARCHAR(50) = 'AM+005+ViewTest'

-- Declare a temporary table to hold IDs that need to be deleted
DROP TABLE IF EXISTS #TempClearDataTable;
CREATE TABLE #TempClearDataTable (UserId INT, PersonId INT, PersonOrganisationConnectionId INT, EnrolmentId INT, OrganisationsConnectionsId INT, SelectedSchemeId INT);

-- Identify users, persons, person org connections, enrolments with certain partial matches in email addresses and store their ids
INSERT INTO #TempClearDataTable(UserId, PersonId, PersonOrganisationConnectionId, EnrolmentId, OrganisationsConnectionsId, SelectedSchemeId)
SELECT u.Id as UserId, p.Id as PersonId, poc.Id as PersonOrganisationConnectionId, e.Id as EnrolmentId, oc.Id as OrganisationsConnectionsId, ss.Id as SelectedSchemeId
FROM Persons p
	JOIN Users u ON p.UserId = u.Id
	JOIN PersonOrganisationConnections poc ON p.Id = poc.PersonId
	JOIN Enrolments e ON poc.Id = e.ConnectionId
	JOIN Organisations o On o.Id = poc.OrganisationId
	LEFT JOIN OrganisationsConnections oc ON oc.FromOrganisationId = o.Id -- producer orgs
	LEFT JOIN SelectedSchemes ss ON ss.OrganisationConnectionId = oc.Id
WHERE p.Email LIKE @UserEmailPrefix + '%' + @UserEmailDomain;

-- Deleted from regulator comments table
DELETE rc 
FROM RegulatorComments rc
INNER JOIN #TempClearDataTable t ON rc.EnrolmentId = t.EnrolmentId;

-- Delete related rows from the Enrolments table
DELETE e FROM Enrolments e
WHERE e.Id IN (
    SELECT EnrolmentId FROM #TempClearDataTable
);

-- Delete related rows from the PersonOrganisationConnections table
DELETE poc FROM PersonOrganisationConnections poc
WHERE poc.Id IN (
    SELECT PersonOrganisationConnectionId FROM #TempClearDataTable
);

-- Delete the rows from the Persons table
DELETE p FROM Persons p
WHERE p.Id IN (
    SELECT PersonId FROM #TempClearDataTable
);

-- Delete the rows from the Users table
DELETE u FROM Users u
WHERE u.Id IN (
    SELECT UserId FROM #TempClearDataTable
);

-- Delete related rows from the SelectedSchemes table
DELETE ss FROM SelectedSchemes ss
WHERE ss.Id IN (
    SELECT SelectedSchemeId FROM #TempClearDataTable
);

-- Delete related rows from the OrganisationsConnections table
DELETE oc FROM OrganisationsConnections oc
WHERE oc.Id IN (
    SELECT OrganisationsConnectionsId FROM #TempClearDataTable
);

DROP TABLE IF EXISTS #TempClearDataTable;

-- Delete ComplainceSchemes by partial match of name
DELETE cs FROM ComplianceSchemes cs
WHERE cs.Name LIKE @OrganisationNamePrefix + '%'

-- Delete orgs by partial match of name
DELETE o FROM Organisations o
WHERE o.Name LIKE @OrganisationNamePrefix + '%'