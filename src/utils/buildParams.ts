import { FilterTypes } from "types";

const buildParams = (data: FilterTypes): string => {
  const params = new URLSearchParams();

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      for (const val of value) {
        params.append(key, val);
      }
    } else {
      params.append(key, value.toString());
    }
  });

  return params.toString();
};

export default buildParams;
