export const DocumentEvent = (eventType, event) => {
  document.addEventListener(eventType, event);
};

export default DocumentEvent;