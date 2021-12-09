import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <h2>{props.text}</h2>
      <div>
        <button onClick={deleteHandler}>Delete</button>
      </div>
      {ModalIsOpen && (
        <Modal onCancel={closeModalHandler} onClick={closeModalHandler} />
      )}
      {ModalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;
