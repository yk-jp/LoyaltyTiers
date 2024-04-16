import express from "express";

export const saveOrder = async (
  req: express.Request,
  res: express.Response
) => {
  console.log("test");
  res.sendStatus(200);
};
