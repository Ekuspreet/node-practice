# node-practice

### Endpoints

| MODE   | PATH              | BODY               | RESPONSE                                        |
| ------ | ----------------- | ------------------ | ----------------------------------------------- |
| GET    | /api/info/[name]  | -                  | Information of name provided or no name exists. |
| POST   | /api/info/[name]  | {data : string}    | Information added or failed to add.             |
| PUT    | /api/info/[name]  | {data : string}    | Information updated or failed to update.        |
| DELETE | /api/info/[name]  | -                  | User Deleted or failed to delete.               |
| POST   | /api/maximum      | {input : string[]} | Maximum frequency that appears first.           |
| POST   | /api/maximum/last | {input : string[]} | Maximum Frequency last.                         |
