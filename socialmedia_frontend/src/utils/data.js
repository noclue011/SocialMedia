export const userQuery = (userId) => {
    // Get document of user with the id 'userId'
    const query = `*[_type == "user" && _id == '${userId}']`

    return query;
}
