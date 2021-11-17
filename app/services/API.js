import serviceBase from "./serviceBase";

const productService = {
  test: () => serviceBase.get("/api/news"),
  login: (payload) => serviceBase.post("/api/login", payload),
  getAllReviews: () => serviceBase.get("/api/review/getall"),
  createReview: (payload) => serviceBase.post("/api/review", payload),
  updateReview: (payload) => serviceBase.put("/api/review", payload),
  deleteReview: (id) => serviceBase.delete(`/api/review/${id}`),
  getAllArticles: () => serviceBase.get("/api/article"),
  createArticle: (payload) => serviceBase.post("/api/article", payload),
  updateArticle: (payload) => serviceBase.put("/api/article", payload),
  deleteArticle: (id) => serviceBase.delete(`/api/article/${id}`),
};
export default productService;
