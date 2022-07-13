/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}

// This is an example of a "dynamic" route
// i.e. <domain>/joe => Hello Joe
