import Button from "./Button";
import { useItemsContext } from "../lib/hook";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleRemoveAllItem,
    handleResetToInitial,
  } = useItemsContext();

  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItem} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
// import { secondaryButton } from "../lib/constants";

// const secondaryButtons = [
//   {
//     text: "Mark all as complete",
//     onClick: handleMarkAllAsComplete,
//   },
//   {
//     text: "Mark all as incomplete",
//     onClick: handleMarkAllAsIncomplete,
//   },
//   {
//     text: "Reset to initial",
//     onClick: handleResetToInitial,
//   },
//   {
//     text: "Remove all items",
//     onClick: handleRemoveAllItem,
//   },
// ];

{
  /* {secondaryButtons.map((button) => (
  <Button
  key={button.text} // Use only the text for a unique key
  buttonTypetype="secondary"
  onClick={button.onClick}
        >
          {button.text}
        </Button>
      ))} */
}
{
  /* {secondaryButtons.map((button) => {
        return (
          <Button
            key={button.text}
            buttonTypetype="secondary"
            onClick={button.onClick}
          >
            {button.text}
          </Button>
        );
      })} */
}
