import Link from "next/link";

export default function NotFound() {
  return (
    <section className="error-section centred">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(/assets/images/shape/shape-1.png)" }}
      ></div>
      <div className="auto-container">
        <div className="inner-box">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link href="/" className="theme-btn btn-one">
            <i className="flaticon-right-arrow" aria-hidden="true" />
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
