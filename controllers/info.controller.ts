import { Request, Response, NextFunction } from "express";
import fs from "fs";

const InfoController = {
  getInfo: (req: Request, res: Response, _next: NextFunction): void => {
    const name = req.params.name;
    if (!fs.existsSync(`./information/${name}.txt`)) {
      res.status(404).json({
        error: "No Such User"
      });
      return;
    }
    const data = fs.readFileSync(`./information/${name}.txt`, "utf-8");
    res.status(200).json({
      name: name,
      data: data
    });
  },
  setInfo: (req: Request, res: Response, _next: NextFunction): void => {
    const name = req.params.name as string;
    const data = req.body.data as string;
    try {
      if (fs.existsSync(`./information/${name}.txt`)) {
        res.status(403).json({
          error: "User Already Exists"
        });
        return;
      }
      fs.writeFileSync(`./information/${name}.txt`, data);
      res.status(200).json({
        message: "User Added Successfully."
      });
    } catch (error) {
      res.status(500).json({
        message: "Unable To Create User."
      });
    }
  },
  removeInfo: (req: Request, res: Response, _next: NextFunction): void => {
    const name = req.params.name as string;
    try {
      if (!fs.existsSync(`./information/${name}.txt`)) {
        res.status(403).json({
          error: "No User To Remove"
        });
        return;
      }
      fs.unlinkSync(`./information/${name}.txt`);
      res.status(200).json({
        message: "User Deleted Successfully."
      });
    } catch (error) {
      res.status(500).json({
        message: "Unable To Delete User."
      });
    }
  },
  updateInfo: (req: Request, res: Response, _next: NextFunction): void => {
    const name = req.params.name as string;
    const data = req.body.data as string;
    try {
      if (!fs.existsSync(`./information/${name}.txt`)) {
        res.status(403).json({
          error: "No User To Update"
        });
        return;
      }
      fs.writeFileSync(`./information/${name}.txt`, data);
      res.status(200).json({
        message: "User Updated Successfully."
      });
    } catch (error) {
      res.status(500).json({
        message: "Unable To Update User."
      });
    }
  }
};

export default InfoController;
