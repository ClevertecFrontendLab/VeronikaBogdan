export const handleTrim = (event, setValue) =>
    setValue(event.target.name, event.target.value.trim(), { shouldValidate: true });
