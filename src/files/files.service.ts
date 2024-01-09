import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from "path";
import * as fs from "fs";
import * as uuid from "uuid";

@Injectable()
export class FilesService {
    async createFile(file): Promise<string> {
        try {
            console.log(file, "FILE");
            const fileName = uuid.v4() + '.jpg';
            console.log(fileName, "FILENAME")
            const filePath = path.resolve(__dirname, '..', 'static');
            console.log(filePath, 'FILEPATH');
            if(!fs.existsSync(filePath)) {
                console.log("HELLO");
                fs.mkdirSync(filePath, {recursive: true});
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer);
            return fileName;
        } catch(e) {
            throw new HttpException('Произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
