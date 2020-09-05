import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World asdasdas .{" "}
      <Link href="/about">
        <a>About Foo</a>
      </Link>
    </div>
  );
}
