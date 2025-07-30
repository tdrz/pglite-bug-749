import {PGlite} from "@electric-sql/pglite";
import {it, expect} from "vitest";

it("fails", async () => {
    const db = new PGlite({debug: 5})
    expect(await db.query("select 'Hello world' as message;")).toEqual({
        "affectedRows": 0,
        "fields": [
            {
                "dataTypeID": 25,
                "name": "message",
            },
        ],
        "rows": [
            {
                "message": "Hello world",
            },
        ],
    });
})
