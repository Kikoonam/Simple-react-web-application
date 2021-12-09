
function Modal(props) {

    function cancelHandler()
    {
        props.onCancel();
    }

    function confirmHandler(){
        props.OnConfirm();

    }
  return (
    <div>
      <p>Are u sure?</p>
      <button onClick={props.onCancel}>cancel</button>
      <button onClick={props.OnConfirm}>Confirm</button>
    </div>
  );
}

export default Modal;
