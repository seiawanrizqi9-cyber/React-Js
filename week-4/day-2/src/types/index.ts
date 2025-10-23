export interface user {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  isActive: boolean;
  avatar?: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  category: string;
  images: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiError {
  status: number;
  message: string;
}

// ✅ Perbaikan type guard
export function isApiError(data: unknown): data is ApiError {
  return (
    typeof data === "object" &&
    data !== null &&
    "message" in data &&
    "status" in data
  );
}