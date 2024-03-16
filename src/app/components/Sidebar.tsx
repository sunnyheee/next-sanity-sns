import { User } from "@/model/user";
import React from "react";
import Avatar from "./Avatar";

type Props = {
  user: User;
};

const Sidebar = ({ user: { name, username, image } }: Props) => {
  return (
    <>
      <div>
        {image && <Avatar image={image} />}
        <p>{username}</p>
        <p>{name}</p>
      </div>
      <p>About / Help / Press / API / Jobs </p>
      <p>@Copyright SNS from METAL</p>
    </>
  );
};

export default Sidebar;
