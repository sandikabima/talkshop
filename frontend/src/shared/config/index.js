import Joi from "joi";


export const navbarLinks = [
    {
        type: "dropdown",
        label: "Shop",
        items: [
            { to: "#", label: "T-Shirts & Polos" },
            { to: "#", label: "Pants & Jeans" },
            { to: "#", label: "Hats & Caps" },
            { to: "#", label: "Shoes & Sneakers" },
            { to: "#", label: "Accessories" },
        ],
    },
    { type: "link", to: "/customer/dashboard", label: "On Sale" },
    { type: "link", to: "/", label: "New Arrivals" },
    { type: "link", to: "/", label: "Brands" },
];
  

export const schemaLogin = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": `"Email" harus berupa teks`,
      "string.email": `"Email" tidak valid`,
      "any.required": `"Email" harus diisi`,
    }),
  password: Joi.string().min(6).required().messages({
    "string.base": `"Password" harus berupa teks`,
    "string.min": `"Password" minimal 6 karakter`,
    "any.required": `"Password" harus diisi`,
  }),
});

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const schemaRegister = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.base": `"Username" harus berupa teks`,
    "string.min": `"Username" minimal 3 karakter`,
    "string.max": `"Username" maksimal 30 karakter`,
    "any.required": `"Username" harus diisi`,
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": `"Email" harus berupa teks`,
      "string.email": `"Email" tidak valid`,
      "any.required": `"Email" harus diisi`,
    }),
  password: Joi.string().min(6).required().messages({
    "string.base": `"Password" harus berupa teks`,
    "string.min": `"Password" minimal 6 karakter`,
    "any.required": `"Password" harus diisi`,
  }),
});

export const registerFormControls = [
  {
    name: "username",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your user email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
  // {
  //   name: "gender",
  //   label: "Jenis Kelamin",
  //   placeholder: "Pilih",
  //   componentType: "select",
  //   options: [
  //     { label: "Laki-laki", value: "male" },
  //     { label: "Perempuan", value: "female" },
  //   ],
  // },
];

export const categoriesSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.base": `"name" must be a text`,
    "string.min": `"name" must be at least 3 characters`,
    "string.max": `"name" must be at most 30 characters`,
    "any.required": `"name" is required`,
  }),
});


export const categoriesFormControls = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    componentType: "input",
    type: "text",
  },
];

export const productSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': 'Name harus berupa teks',
    'string.empty': 'Name tidak boleh kosong',
    'string.min': 'Name minimal 3 karakter',
    'any.required': 'Name wajib diisi',
  }),
  description: Joi.string().allow('', null).messages({
    'string.base': 'Description harus berupa teks',
  }),
  price: Joi.number().min(0).required().messages({
    'number.base': 'Price harus berupa angka',
    'number.min': 'Price minimal 0',
    'any.required': 'Price wajib diisi',
  }),
}).unknown(true);


export const productFormControls = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    componentType: "input",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter your description",
    componentType: "input",
    type: "text",
  },
  {
    name: "price",
    label: "Price",
    placeholder: "Enter your price",
    componentType: "input",
    type: "text",
  },
  {
    name: "categoryId",
    label: "Category",
    placeholder: "Pilih",
    componentType: "select-search",
  },
];

export const stockSchema = Joi.object({
  quantity: Joi.number().integer().min(0).required().messages({
    "any.required": "Quantity is required",
    "number.base": "Quantity must be a number",
    "number.min": "Quantity cannot be negative",
  }),
  location: Joi.string().min(2).required().messages({
    "any.required": "Location is required",
    "string.base": "Location must be a string",
    "string.min": "Location must be at least 2 characters long",
  }),
}).unknown(true);

export const stockFormControls = [
  {
    name: "productId",
    label: "Product",
    placeholder: "Pilih",
    componentType: "select-search",
  },
  {
    name: "quantity",
    label: "Quantity",
    placeholder: "Enter quantity",
    componentType: "input",
    type: "text",
  },
  {
    name: "location",
    label: "Location",
    placeholder: "Enter Location",
    componentType: "input",
    type: "text",
  },
];


export const menu = [
  {
    name: "MENU",
    subMenu: [
      { label: "Dashboard", icon: "LayoutDashboard", to: "/admin/dashboard" },
      { label: "Users", icon: "UserRoundPlus", to: "/admin/users" },
      { label: "Categories", icon: "ChartBarStacked", to: "/admin/categories" },
      { label: "Products", icon: "FolderPen", to: "/admin/products" },
      { label: "Stocks", icon: "FilePenLine", to: "/admin/stocks" },
    ],
  },
  {
    name: "SETTING",
    subMenu: [
      { label: "Profile", icon: "UserRoundCog", to: "/admin/profile" },
    ],
  },
];

