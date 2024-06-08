const extractTokenToHeader = (reqObject) => {
  return reqObject.split(" ")[1];
};

const verifyScopesByRole = (tokenRole, scopes) => {
  if (
    tokenRole === "DOCTOR" &&
    (scopes.includes("PATIENT") || scopes.includes("DOCTOR"))
  )
    return true;
  else if (tokenRole === "PATIENT" && scopes.includes("PATIENT")) return true;
  return false;
};

export { extractTokenToHeader, verifyScopesByRole };
