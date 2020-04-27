# Introduction

inspired by [the container transform pattern of Material Design motion system](https://www.material.io/design/motion/the-motion-system.html#container-transform)

![images](./modal.gif)

[demo address](https://chenhx2015.github.io/react-transform-modal/)

# usage

1. Import dependencies and module method

```javascript
import React from "react";
import { render } from "react-dom";
import useModal from "react-transform-modal";
```

2. Build UI

- Modal : this component can wrap other element like title , content and button
- open: open the modal
- close: close the modal
- styleModalContent: the style of modal
- styleModalHeader: the style of modal's header

```javascript
const ExampleModal = () => {
  const { Modal, open, close } = useModal();

  return (
    <div>
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
              You can also close me by pressing the &quot;ESC&quot; key.</br>
              This is the content area...
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

function App() {
  return (
    <div>
      <ExampleModal />
    </div>
  );
}

```

3. render the modal

```javascript
render(<App />, document.getElementById("root"));
```
