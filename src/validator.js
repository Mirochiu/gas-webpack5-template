function validator() {
  const e = Session.getEffectiveUser();
  const a = Session.getActiveUser();
  return e?.getEmail() === a?.getEmail();
}

export default validator;
