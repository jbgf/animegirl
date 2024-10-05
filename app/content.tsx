'use client';
import { SessionProvider } from "next-auth/react";

import GeneratePictureZone from "./generate-picture-zone";

export default function Content() {
    return (
        <SessionProvider>

            <GeneratePictureZone />
        </SessionProvider>

    );
}
