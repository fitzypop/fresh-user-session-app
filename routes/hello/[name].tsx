/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";

export default function Greet(props: PageProps) {
  return (
    <div class={tw`w-screen h-screen bg-gray-800 text(white)`}>

      <div class={tw`p-8 mx-auto max-w-screen-md bg-grey-300`}>
        <p>
            Url is: {props.url}
            <hr />
            Route is: {props.route}
            <hr />
            Hello {props.params.name}
        </p>
      </div>
    </div>
  );
}

// This is an example of a "dynamic" route
// i.e. <domain>/hello/joe => Hello Joe
