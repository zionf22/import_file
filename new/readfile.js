import {readFile} from "fs";

import { Request, Response, Router} from "express";

import multer from "multer";
import { request } from "http";

const multerconfig = multer()

const router = Router();

router.post(
    "/products",
    multerconfig.single("file")
    (request: Request, response: Response) == {
        const {file} = request;
        const {buffer} = file;

        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);

        
        return response.send();
    }
);

export {router};