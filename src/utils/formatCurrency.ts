const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "AED",
    style: "currency",
});

const formatCurrency = (number: number): string => {
    return CURRENCY_FORMATTER.format(number);
};

export default formatCurrency;
