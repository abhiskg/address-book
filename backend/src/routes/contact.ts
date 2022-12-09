import express from "express";
import {
  AddNewContact,
  DeleteContactById,
  FetchAllContacts,
  FetchContactById,
  UpdateContactById,
} from "../controllers/ContactController";
const router = express.Router();

router.route("/contact/new").post(AddNewContact);
router.route("/contacts").get(FetchAllContacts);

router
  .route("/contact/:id")
  .get(FetchContactById)
  .patch(UpdateContactById)
  .delete(DeleteContactById);

export default router;
