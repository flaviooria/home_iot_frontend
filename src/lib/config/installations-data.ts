import type { ColumnDef } from "@tanstack/table-core";
import type {Installation} from "../types/installations";

export const installationsColumns: ColumnDef<Installation>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    
];