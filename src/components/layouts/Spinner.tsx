type SpinnerProps = {
  loading: boolean;
};

export default function Spinner({ loading }: SpinnerProps) {

  if (!loading) return null;

  return (
    <div

      id="spinner"
      className={`show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center spinner-overlay  ${loading ? "show-spinner" : "hide-spinner"}`}>
      <div
        className="spinner-border text-danger"
        style={{ width: "3rem", height: "3rem" }}
      >
      </div>
    </div>
  );
}