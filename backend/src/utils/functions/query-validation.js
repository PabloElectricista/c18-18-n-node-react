const validateSchedulerQueryParams = (filters) => {
  if (filters.date_type && (filters.date_to || filters.date_from))
    return "combinacion de parametros invalidos, date_type & date_to con date_from";
  if (!filters.date_type && filters.date_from && filters.to)
    return "debe ingresar los parametros date_from y date_to";
  return null;
};

export default { validateSchedulerQueryParams };
