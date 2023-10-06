function Button({ type, text, onClick }) {
  return (
    <button className={`${type}`} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;

{/* <Button text={'Add'} type={'btn-success'} onClick={addContact} /> */}

