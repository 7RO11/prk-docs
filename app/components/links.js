import Linker from "./linker";

export default function Links(props) {
  return (
    <>
      <Linker
        href={`https://portal.project-rk.com/srv/ithaca/db/items/${props.id}`}
      >
        https://portal.project-rk.com/srv/ithaca/db/items/{props.id}
      </Linker>
      <br />
      <Linker href={`https://prk.tinkeringidiot.com/items/${props.id}`}>
        https://prk.tinkeringidiot.com/items/{props.id}
      </Linker>
    </>
  );
}
