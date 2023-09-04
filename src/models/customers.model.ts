type Customers = {
  customer_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  created_at: Date;
};

export default Customers;
