export const formatPrice = (price: string) => {
    return price.replace(/\. /g, '').replace('Rp ', 'Rp');
  };
