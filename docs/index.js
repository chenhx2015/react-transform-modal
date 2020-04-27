import React from "react";
import { render } from "react-dom";
import useModal from "../src/useModal";

const styleModalContent = {
  margin: "4.75rem auto",
  width: "90%",
  maxWidth: "500px",
  background: "#fff",
  backgroundClip: "padding-box",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  borderRadius: "0.3rem",
};

const styleModalHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  borderBottom: "1px solid #dee2e6",
};

const styleModalClose = {
  margin: "-1rem -1rem -1rem",
  padding: "1rem",
  border: "none",
  fontSize: "1.5rem",
  fontWeight: "700",
  lineHeight: 1,
  color: "#000",
  background: "inherit",
  textShadow: "0 1px 0 #fff",
  opacity: "0.5",
  cursor: "pointer",
};

const stylePl = {
  paddingLeft: "1rem",
};

const ExampleModal = () => {
  const { Modal, open, close } = useModal();

  return (
    <div>
      <h3>Example Modal</h3>
      <p>
        <button onClick={open}>Open</button>
      </p>
      <Modal>
        <div style={styleModalContent}>
          <div style={styleModalHeader}>
            <h5>Title</h5>
            <button style={styleModalClose} onClick={close} type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>
            <p style={stylePl}>
              You can also close me by pressing the &quot;ESC&quot; key.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const ExampleModal2 = () => {
  const { Modal, open, close } = useModal();

  return (
    <div>
      <h3>Example Modal 2</h3>
      <p>
        <button onClick={open}>Open</button>
      </p>
      <Modal>
        <div style={styleModalContent}>
          <div style={styleModalHeader}>
            <h5>Title</h5>
            <button style={styleModalClose} onClick={close} type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>
            <p style={stylePl}>
              You can also close me by pressing the &quot;ESC&quot; key.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <ExampleModal />
      <ExampleModal2 />
    </div>
  );
}

render(<App />, document.getElementById("root"));
