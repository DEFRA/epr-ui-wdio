-- Clear down test entities (user, person, poc, enrollments) by matching email address
DECLARE @EmailPrefix NVARCHAR(50)
SET @EmailPrefix = 'carl.tildsley+OfflineTestOrg'

DECLARE @EmailDomain NVARCHAR(50)
SET @EmailDomain = 'kainos.com'

DECLARE @TestOrgPrefix NVARCHAR(50)
SET @TestOrgPrefix = 'Test_Reg_Applications'

-- Declare a temporary table to hold IDs that need to be deleted
DECLARE @TempTable AS TABLE (UserId INT, PersonId INT, PersonOrganisationConnectionId INT, EnrolmentId INT);

-- Identify users, persons, person org connections, enrolments with certain partial matches in email addresses and store their ids
INSERT INTO @TempTable(UserId, PersonId, PersonOrganisationConnectionId, EnrolmentId)
SELECT u.Id, p.Id, poc.Id, e.Id FROM Persons p
INNER JOIN Users u ON p.UserId = u.Id
INNER JOIN PersonOrganisationConnections poc ON p.Id = poc.PersonId
INNER JOIN Enrolments e ON poc.Id = e.ConnectionId
WHERE p.Email LIKE @EmailPrefix + '%' + @EmailDomain;

-- Deleted from regulator comments table
DELETE rc 
FROM RegulatorComments rc
INNER JOIN @TempTable t ON rc.EnrolmentId = t.EnrolmentId;

-- Delete related rows from the Enrolments table
DELETE e FROM Enrolments e
WHERE e.Id IN (
 SELECT EnrolmentId FROM @TempTable
);

-- Delete related rows from the PersonOrganisationConnections table
DELETE poc FROM PersonOrganisationConnections poc
WHERE poc.Id IN (
 SELECT PersonOrganisationConnectionId FROM @TempTable
);

-- Delete the rows from the Persons table
DELETE p FROM Persons p
WHERE p.Id IN (
 SELECT PersonId FROM @TempTable
);

-- Delete the rows from the Users table
DELETE u FROM Users u
WHERE u.Id IN (
 SELECT UserId FROM @TempTable
);

-- Delete orgs by partial match of name
DELETE o FROM Organisations o
WHERE o.Name LIKE @TestOrgPrefix + '%'