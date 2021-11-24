export const FETCH_USERS = "fetch/users";

export function fetchUsers(users) {
  return {
    type: FETCH_USERS,
    payload: users,
  };
}
