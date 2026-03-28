const BASE_URL = "http://localhost:3000";


export const getCategories = async () => {
    const res = await fetch(`${BASE_URL}/categories`);
    return res.json();
};

export const getSubcategories = async () => {
    const res = await fetch(`${BASE_URL}/subcategories`);
    return res.json();
};

export const getProducts = async (subcategoryId) => {
    const res = await fetch(
        `${BASE_URL}/products?subcategoryId=${subcategoryId}`
    );
    return res.json();
};

export const getProductsBySlug = async (subSlug) => {
    const res = await fetch(
        `${BASE_URL}/products?subSlug=${subSlug}`
    );
    return res.json();
};

export const getSubcategoryById = async (subCategoryId) => {
    const res = await fetch(`${BASE_URL}/subcategories/${subCategoryId}`);
    return res.json();
};


export const getProductBySlug = async (slug) => {
    const res = await fetch(`${BASE_URL}/products?slug=${slug}`);
    const data = await res.json();
    // console.log({ "product": data });
    return data[0];
};

export const userLogin = async (trimmedEmail) => {
    const res = await fetch(`${BASE_URL}/users?email=${trimmedEmail}`);
    if (!res.ok) throw new Error("Server check failed");

    return res.json();
};

export const signupUser = async (user) => {

    const checkRes = await fetch(`${BASE_URL}/users?email=${user.email}`);
    const checkData = await checkRes.json();

    if (checkData.length > 0) {
        throw new Error("User with this email already exists");
    }

    const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    return res.json();
};

