DECLARE @emails NVARCHAR(max) = 'carl.tildsley+dev3test@kainos.com'


SET XACT_ABORT ON

BEGIN TRANSACTION

BEGIN TRY
	/* emails to delete */
	CREATE TABLE #Emails_To_Delete
	(
	[Email] NVARCHAR(254) NOT NULL, INDEX [Emails_To_Delete_IDX] ([Email])
	)

	INSERT INTO #Emails_To_Delete
	SELECT DISTINCT VALUE FROM STRING_SPLIT(@emails , ',') AS [email]
	INNER JOIN [Users] [u] ON [u].[Email] = [email]
	INNER JOIN [Persons] [p] ON [p].[UserId] = [u].[Id]
	INNER JOIN [PersonOrganisationConnections] [c] ON [c].[PersonId] = [p].[Id]
	INNER JOIN [Organisations] [o] ON [o].[Id] = [c].[OrganisationId]
	INNER JOIN [OrganisationTypes] [t] ON [t].[Id] = [o].[OrganisationTypeId] and ([t].[Name] = 'Companies House Company' or [t].[Name] = 'Non Companies House Company')
	INNER JOIN [Enrolments] [e] ON [e].[ConnectionId] = [c].[Id]
	INNER JOIN [ServiceRoles] [r] ON [r].[Id] = [e].[ServiceRoleId]
	INNER JOIN [Services] [s] ON [s].[Id] = [r].[ServiceId] and [s].[Key] = 'Packaging'

	/* organisations to delete */
	CREATE TABLE #OrganisationIds_To_Delete
	(
	[OrganisationId] INT NOT NULL, INDEX [OrganisationIds_To_Delete_IDX] ([OrganisationId])
	)
	INSERT INTO #OrganisationIds_To_Delete
	SELECT DISTINCT [c].[OrganisationId]
	FROM [PersonOrganisationConnections] [c]
	INNER JOIN [Persons] [p] ON [p].[Id] = [c].[PersonId]
	INNER JOIN [Users] [u] ON [u].[Id] = [p].[UserId]
	INNER JOIN [#Emails_To_Delete] [del] ON [del].[Email] = [u].[Email]
	WHERE NOT EXISTS ( /* do not delete organisations that have some users with emails not in #Emails_To_Delete */
		SELECT [uu].[Email]
		FROM [PersonOrganisationConnections] [cc]
		INNER JOIN [Persons] [pp] ON [pp].[Id] = [cc].[PersonId]
		INNER JOIN [Users] [uu] ON [uu].[Id] = [pp].[UserId]
		WHERE
		[cc].[OrganisationId] = [c].[OrganisationId]
		AND [uu].[Email] NOT IN (SELECT [Email] FROM #Emails_To_Delete)
	)

	/*
	* delete statements
	*/
	DELETE [d] FROM DelegatedPersonEnrolments [d]
	INNER JOIN [Enrolments] [e] ON [e].[Id] = [d].[EnrolmentId]
	INNER JOIN [PersonOrganisationConnections] [c] ON [c].[Id] = [e].[ConnectionId]
	INNER JOIN [Persons] [p] ON [p].[Id] = [c].[PersonId]
	INNER JOIN [Users] [u] ON [u].[Id] = [p].[UserId]
	INNER JOIN [#Emails_To_Delete] [del] ON [del].[Email] = [u].[Email]

	DELETE [e] FROM [Enrolments] [e]
	INNER JOIN [PersonOrganisationConnections] [c] ON [c].[Id] = [e].[ConnectionId]
	INNER JOIN [Persons] [p] ON [p].[Id] = [c].[PersonId]
	INNER JOIN [Users] [u] ON [u].[Id] = [p].[UserId]
	INNER JOIN [#Emails_To_Delete] [del] ON [del].[Email] = [u].[Email]

	DELETE [c] FROM [PersonOrganisationConnections] [c]
	INNER JOIN [Persons] [p] ON [p].[Id] = [c].[PersonId]
	INNER JOIN [Users] [u] ON [u].[Id] = [p].[UserId]
	INNER JOIN [#Emails_To_Delete] [del] ON [del].[Email] = [u].[Email]

	DELETE [p] FROM [Persons] [p]
	INNER JOIN [Users] [u] ON [u].[Id] = [p].[UserId]
	INNER JOIN [#Emails_To_Delete] [del] ON [del].[Email] = [u].[Email]

	DELETE [u] FROM [Users] [u]
	INNER JOIN [#Emails_To_Delete] [del] ON [del].[Email] = [u].[Email]

	DELETE [o] FROM [Organisations] [o]
	INNER JOIN [#OrganisationIds_To_Delete] [del] ON [del].[OrganisationId] = [o].[Id]

	COMMIT TRANSACTION
	PRINT N'Success'
END TRY

BEGIN CATCH
	ROLLBACK TRANSACTION
	PRINT N'Error'
END CATCH