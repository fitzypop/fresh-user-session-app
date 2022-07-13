/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import {PageProps} from "$fresh/server.ts"

export default function Home(props: PageProps) {
  return (
    <div class={tw`w-screen h-screen bg-gray-800 text(white)`}>

      <div class={tw`p-8 mx-auto max-w-screen-md bg-grey-300`}>
        <img
          src="/logo.svg"
          height="100px"
          class="mx-auto"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class={tw`my-6 text(center 3xl)`}>
          Welcome to my shitty web app!
        </p>

        <div class="container">
          <form>
            <input type="text" name="username" id="username" placeholder="Enter your username" />
            <input type="password" name="password" id="password" placeholder="Password" />
            <input type="submit" value="" />
          </form>
        </div>
      </div>
    </div>
  );
}
