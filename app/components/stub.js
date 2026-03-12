export default function Stub(props) {
  return (
    <div className="p-4 text-2xl my-3 font-light border border-(--stubby)/90">
      🪵 this page is a stub. it may be incomplete, inaccurate or a template
      page. {props.reason ? <div>reason: {props.reason}</div> : ""}
    </div>
  );
}
