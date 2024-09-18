import { TableData } from "../../../interface";

let tableData = [ 
    {
        "id": "0be30cc0d3f126",
        "designation": "UI developer",
        "department": "Engineering",
        "budget": 11,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Admin",
            "Sep 17, 2024 03:13 AM"
        ]
    },
    {
        "id": "6e43578d-956c-4f43-abb1-4c5aad0f9d52",
        "designation": "Programmer Analyst",
        "department": "Other",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Jun 4, 2022 11:33 am"
        ]
    },
    {
        "id": "eef43345-1b4c-4e06-b3eb-52b764bc1565",
        "designation": "Backend Developer",
        "department": "Engineering",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Feb 7, 2022 11:42 pm"
        ]
    },
    {
        "id": "740f45ef-583b-4530-87e9-cb2bcf649d6e",
        "designation": "Business Analyst",
        "department": "Product",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Meet Mehta",
            "Feb 26, 2024 08:40 pm"
        ]
    },
    {
        "id": "4e37e89b-e15f-4e12-8127-02dce89b857e",
        "designation": "QA Specialist",
        "department": "Sales",
        "budget": 15,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "May 12, 2023 03:55 am"
        ]
    },
    {
        "id": "cd556ab4-00a3-4afa-8770-2af054855f4f",
        "designation": "Cloud Architect",
        "department": "Sales",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Jun 8, 2022 09:55 pm"
        ]
    },
    {
        "id": "28cbd377-34d6-4b1d-ba28-b98de9d16884",
        "designation": "Marketing Lead",
        "department": "Product",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Aug 31, 2024 05:15 am"
        ]
    },
    {
        "id": "f2369968-d6f7-4e4e-ba1a-7a59e6511bee",
        "designation": "UI Designer",
        "department": "Engineering",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Dec 14, 2021 07:36 pm"
        ]
    },
    {
        "id": "dffca5ef-a4d6-43fa-a591-865472c4d0f1",
        "designation": "Backend Developer",
        "department": "HR",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Apr 5, 2020 08:19 am"
        ]
    },
    {
        "id": "63643516-e090-4058-ab26-fcf1f848112c",
        "designation": "Product Manager",
        "department": "Engineering",
        "budget": 25,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Jun 4, 2022 05:28 pm"
        ]
    },
    {
        "id": "2290fa3d-5cb2-4ef9-8d3f-859282d13fd2",
        "designation": "UI Designer",
        "department": "Engineering",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Meet Mehta",
            "Sep 18, 2021 05:48 am"
        ]
    },
    {
        "id": "9e5cfc75-2564-4a69-a7f2-4101cc1cc7ff",
        "designation": "Marketing Lead",
        "department": "Other",
        "budget": 15,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "May 3, 2022 02:28 am"
        ]
    },
    {
        "id": "b515eb0c-b68e-46a7-a769-be256480828b",
        "designation": "Product Manager",
        "department": "Engineering",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Jul 9, 2024 09:57 pm"
        ]
    },
    {
        "id": "5465ec17-ece4-4e88-861a-2f71145950d2",
        "designation": "Software Engineer",
        "department": "Product",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Nov 4, 2021 10:08 pm"
        ]
    },
    {
        "id": "5768c019-93a5-43e4-b89c-f21db7ba2e35",
        "designation": "DevOps Engineer",
        "department": "Product",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "May 27, 2020 01:50 pm"
        ]
    },
    {
        "id": "a8168d4a-6a53-4437-a6be-bba8906a9d05",
        "designation": "Cloud Architect",
        "department": "Other",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Oct 12, 2020 04:49 am"
        ]
    },
    {
        "id": "6f3b5ea5-ff81-4784-8136-4f825d8e6a84",
        "designation": "Frontend Developer",
        "department": "HR",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Nov 23, 2020 10:14 am"
        ]
    },
    {
        "id": "2643c3ee-c979-4aa9-8bfc-54a0de75f378",
        "designation": "Software Engineer",
        "department": "Engineering",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "Jul 17, 2022 01:42 am"
        ]
    },
    {
        "id": "30468e43-d9ab-4e11-b673-e9da1f461dd1",
        "designation": "UI Designer",
        "department": "Sales",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Nov 15, 2021 09:04 pm"
        ]
    },
    {
        "id": "09f61572-c877-4a7a-98f3-054310467a32",
        "designation": "Software Engineer",
        "department": "Sales",
        "budget": 15,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "Jun 8, 2021 04:01 pm"
        ]
    },
    {
        "id": "48bbef1a-34a4-419e-b534-95704b511360",
        "designation": "Data Scientist",
        "department": "Sales",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "May 18, 2020 12:45 pm"
        ]
    },
    {
        "id": "d382c0ce-b7b5-4033-8786-2527d876eeb4",
        "designation": "DevOps Engineer",
        "department": "Sales",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "Jul 19, 2020 08:21 pm"
        ]
    },
    {
        "id": "193867ae-83c3-453f-a265-f40ed22af77b",
        "designation": "Software Engineer",
        "department": "HR",
        "budget": 15,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Meet Mehta",
            "Jun 12, 2021 02:57 am"
        ]
    },
    {
        "id": "d8c7935b-bfbb-40aa-a279-d625fa82b290",
        "designation": "HR Designer",
        "department": "HR",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "Oct 19, 2021 06:46 pm"
        ]
    },
    {
        "id": "49f2ddef-b758-4a52-a9c4-c3badf0bd0f3",
        "designation": "Data Scientist",
        "department": "HR",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Mar 28, 2020 04:56 pm"
        ]
    },
    {
        "id": "85d0fac4-d940-4d95-af09-c776ef0e5646",
        "designation": "Software Engineer",
        "department": "Sales",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "Nov 30, 2022 08:22 am"
        ]
    },
    {
        "id": "49bdbd8b-f568-4472-bce1-d88415c918ce",
        "designation": "DevOps Engineer",
        "department": "HR",
        "budget": 25,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Oct 29, 2023 05:56 pm"
        ]
    },
    {
        "id": "5e2ca244-2772-4fb1-821f-c68d064035b6",
        "designation": "Product Manager",
        "department": "Other",
        "budget": 25,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Aug 19, 2022 05:36 am"
        ]
    },
    {
        "id": "46811add-9963-4982-99ed-2e79c5da4075",
        "designation": "Backend Developer",
        "department": "Other",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Meet Mehta",
            "May 4, 2022 06:15 am"
        ]
    },
    {
        "id": "c7605455-fc26-4e3f-97d7-291647cf9dae",
        "designation": "QA Specialist",
        "department": "Product",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Jan 25, 2020 07:36 am"
        ]
    },
    {
        "id": "0f1464b2-abbc-4f2e-985b-654f16cd4288",
        "designation": "HR Designer",
        "department": "Engineering",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Meet Mehta",
            "Oct 15, 2021 08:02 pm"
        ]
    },
    {
        "id": "97e816a5-6d64-476e-8086-1dc44e252de9",
        "designation": "UI Designer",
        "department": "Engineering",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Sneha Roy",
            "Jun 30, 2022 04:27 pm"
        ]
    },
    {
        "id": "e3448e2f-882d-4681-b0e6-dedb6482f543",
        "designation": "Business Analyst",
        "department": "Engineering",
        "budget": 12,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Mar 14, 2023 01:03 am"
        ]
    },
    {
        "id": "eca89873-baf2-4cc0-9ce8-5f6139a87b25",
        "designation": "Business Analyst",
        "department": "HR",
        "budget": 12,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "Feb 5, 2024 02:39 pm"
        ]
    },
    {
        "id": "5cdc0092-88a7-4a58-b6a8-4495890d1ace",
        "designation": "HR Designer",
        "department": "Product",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Jul 22, 2024 09:03 pm"
        ]
    },
    {
        "id": "81d23094-23de-493c-af95-2a5004d97dbf",
        "designation": "DevOps Engineer",
        "department": "Sales",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Dec 24, 2020 09:43 pm"
        ]
    },
    {
        "id": "ba64ebcd-e815-4a34-bb41-2d50bf43d7f1",
        "designation": "Business Analyst",
        "department": "Sales",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Apr 6, 2022 06:39 pm"
        ]
    },
    {
        "id": "e98e77a5-ea95-4d39-95aa-025e3b6312fd",
        "designation": "Product Manager",
        "department": "Product",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "Sep 18, 2023 07:02 am"
        ]
    },
    {
        "id": "719ac264-e04a-49ad-ab70-108d7938bd64",
        "designation": "QA Specialist",
        "department": "Sales",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Apr 6, 2021 12:43 am"
        ]
    },
    {
        "id": "cbe47472-144c-4cd1-a953-db1e1b27b554",
        "designation": "Software Engineer",
        "department": "Product",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Aug 15, 2023 04:17 am"
        ]
    },
    {
        "id": "12d17921-a1c3-4a2b-ac6a-6af7067faa0d",
        "designation": "Product Manager",
        "department": "Other",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Jul 28, 2024 03:02 am"
        ]
    },
    {
        "id": "84c6f018-387f-409a-bec9-6cb89a7b2488",
        "designation": "Marketing Lead",
        "department": "Engineering",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Meet Mehta",
            "Apr 26, 2024 08:43 am"
        ]
    },
    {
        "id": "38c9f8b1-22be-4e28-9559-fab81d67509c",
        "designation": "Programmer Analyst",
        "department": "Product",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Sneha Roy",
            "Oct 10, 2021 08:58 am"
        ]
    },
    {
        "id": "9c29ffab-25b1-4efe-8052-53b4826a8dde",
        "designation": "Programmer Analyst",
        "department": "Sales",
        "budget": 12,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Jun 4, 2021 04:28 pm"
        ]
    },
    {
        "id": "2cca0a69-913d-43ff-8d26-deca7b592489",
        "designation": "Programmer Analyst",
        "department": "HR",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Aug 23, 2023 07:56 am"
        ]
    },
    {
        "id": "8e8fe4da-d83e-4d33-a1a1-9d66bdb8244f",
        "designation": "DevOps Engineer",
        "department": "HR",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Sneha Roy",
            "Dec 16, 2023 09:27 am"
        ]
    },
    {
        "id": "00051ab4-f944-4f7f-ae1d-2d1e593a7dcc",
        "designation": "Business Analyst",
        "department": "Product",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Oct 23, 2020 04:50 am"
        ]
    },
    {
        "id": "8f14fcd7-9f3f-4b1e-b2e8-f8bcc1557eac",
        "designation": "Business Analyst",
        "department": "Engineering",
        "budget": 25,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "Dec 12, 2023 03:21 am"
        ]
    },
    {
        "id": "ce4b948b-d5fb-497c-9b01-c8a23174d0e5",
        "designation": "Product Manager",
        "department": "Other",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Sep 23, 2023 06:47 am"
        ]
    },
    {
        "id": "b291d76b-ff85-4cf9-863e-7e9846724286",
        "designation": "Software Engineer",
        "department": "HR",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "Jul 11, 2022 02:13 pm"
        ]
    },
    {
        "id": "2a9b3e88-8cbf-456f-b332-4c249983a356",
        "designation": "Business Analyst",
        "department": "Sales",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Sneha Roy",
            "May 6, 2024 03:58 am"
        ]
    },
    {
        "id": "00e3f3dd-f223-4a3b-b6de-7d11ff7b7c87",
        "designation": "Marketing Lead",
        "department": "Sales",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Jul 11, 2021 03:59 pm"
        ]
    },
    {
        "id": "62a8adf9-d91a-422c-9834-e7a18503e0c9",
        "designation": "Software Engineer",
        "department": "Product",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Jan 25, 2024 01:56 am"
        ]
    },
    {
        "id": "79698e7b-d114-43af-85f1-9505fad705ea",
        "designation": "Backend Developer",
        "department": "Other",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Mar 29, 2023 02:59 pm"
        ]
    },
    {
        "id": "e5bf3a37-adbd-444a-88e3-5d237c48f348",
        "designation": "Business Analyst",
        "department": "Sales",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Sep 9, 2022 06:43 am"
        ]
    },
    {
        "id": "ba63152a-af05-424b-976b-88b2f9b37952",
        "designation": "Backend Developer",
        "department": "Engineering",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "May 22, 2021 09:05 am"
        ]
    },
    {
        "id": "cc2e7d78-98c0-411c-8b2d-e2187c08919d",
        "designation": "Business Analyst",
        "department": "HR",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Jun 4, 2023 05:26 am"
        ]
    },
    {
        "id": "a048d58e-9235-4e79-b0dd-41aeef05dddb",
        "designation": "Programmer Analyst",
        "department": "Engineering",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Aug 11, 2021 08:17 am"
        ]
    },
    {
        "id": "23ed0b47-a987-49ab-85a3-55f91c4ede75",
        "designation": "Backend Developer",
        "department": "Other",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "Sep 13, 2023 02:47 pm"
        ]
    },
    {
        "id": "b482f391-1daf-4ee4-930f-bbf389f8da74",
        "designation": "DevOps Engineer",
        "department": "Engineering",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Apr 24, 2021 01:14 pm"
        ]
    },
    {
        "id": "eccbd9f0-bd07-4b1a-b971-a9673e12f7c5",
        "designation": "Marketing Lead",
        "department": "HR",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "May 15, 2023 03:35 am"
        ]
    },
    {
        "id": "bc2974ac-0fa5-40fe-b860-a8d0e1cc82ed",
        "designation": "Software Engineer",
        "department": "Other",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Sneha Roy",
            "Nov 23, 2020 11:39 am"
        ]
    },
    {
        "id": "38010342-7054-4779-aa2a-bcb51b58dd80",
        "designation": "Software Engineer",
        "department": "HR",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Apr 23, 2022 05:07 am"
        ]
    },
    {
        "id": "71b8fa00-7642-4157-b66e-04b3e1dc4d2c",
        "designation": "HR Designer",
        "department": "Other",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Jul 14, 2021 07:58 pm"
        ]
    },
    {
        "id": "325c1d9e-47d5-46a8-a567-d20a1da95800",
        "designation": "Business Analyst",
        "department": "Engineering",
        "budget": 15,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Jan 20, 2022 06:19 pm"
        ]
    },
    {
        "id": "c6584e73-527d-453c-98f4-667d27a40051",
        "designation": "Marketing Lead",
        "department": "Sales",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "May 8, 2024 04:30 am"
        ]
    },
    {
        "id": "29b6c4b6-d933-469a-8aed-7276d9942c72",
        "designation": "QA Specialist",
        "department": "HR",
        "budget": 25,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Meet Mehta",
            "Mar 2, 2023 08:45 am"
        ]
    },
    {
        "id": "c640da5c-ee9f-4b79-89ae-f85d085500a3",
        "designation": "Programmer Analyst",
        "department": "Sales",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "Nov 5, 2020 12:49 am"
        ]
    },
    {
        "id": "c2fda0e2-89af-4fa4-adce-b062566b3c87",
        "designation": "Cloud Architect",
        "department": "HR",
        "budget": 12,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Mar 17, 2024 05:38 pm"
        ]
    },
    {
        "id": "72e07315-d382-42ac-b9c1-512d54842444",
        "designation": "Software Engineer",
        "department": "Engineering",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "Jan 31, 2023 10:00 pm"
        ]
    },
    {
        "id": "dd8f25f0-24f2-44a9-ad3a-759b048c24b1",
        "designation": "Marketing Lead",
        "department": "Sales",
        "budget": 15,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Jul 31, 2023 04:28 pm"
        ]
    },
    {
        "id": "2889f021-07be-4fc3-b2c8-cc13861dbbf8",
        "designation": "Frontend Developer",
        "department": "Other",
        "budget": 25,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Meet Mehta",
            "Jul 16, 2021 10:06 am"
        ]
    },
    {
        "id": "db53d0d1-0c3e-4a87-a758-365272e340de",
        "designation": "UI Designer",
        "department": "HR",
        "budget": 12,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Jun 11, 2020 12:38 pm"
        ]
    },
    {
        "id": "e366a5c9-c4b6-4310-bc1a-d7671d2e5b44",
        "designation": "DevOps Engineer",
        "department": "Other",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "Jun 24, 2023 02:18 am"
        ]
    },
    {
        "id": "9dfdcaed-57c5-4299-a54b-a49146b82ede",
        "designation": "Frontend Developer",
        "department": "Sales",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Nov 17, 2020 01:49 pm"
        ]
    },
    {
        "id": "68b9e81f-aa11-4e45-86af-65935c0d4060",
        "designation": "Software Engineer",
        "department": "Product",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "May 21, 2021 09:05 am"
        ]
    },
    {
        "id": "52253abe-ff8f-4535-ae04-cf4365064e29",
        "designation": "Programmer Analyst",
        "department": "Sales",
        "budget": 12,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "May 18, 2022 06:58 pm"
        ]
    },
    {
        "id": "ec901403-34b6-4733-9132-80ae8ba9b5bc",
        "designation": "Programmer Analyst",
        "department": "HR",
        "budget": 25,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Jul 21, 2020 08:19 pm"
        ]
    },
    {
        "id": "caa82322-2c06-4063-9d1d-0b003f092dc6",
        "designation": "Programmer Analyst",
        "department": "Sales",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "Feb 17, 2023 03:21 pm"
        ]
    },
    {
        "id": "c24bc58d-41cb-46f5-bb99-95c31e34e605",
        "designation": "DevOps Engineer",
        "department": "Product",
        "budget": 12,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Feb 5, 2020 02:11 am"
        ]
    },
    {
        "id": "b64d57d7-2151-47b5-b98d-762167a8c212",
        "designation": "Business Analyst",
        "department": "HR",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Mar 6, 2022 07:04 pm"
        ]
    },
    {
        "id": "10bc40fd-52e8-4e24-a2d6-da754eb6cfa3",
        "designation": "Product Manager",
        "department": "HR",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Jul 14, 2024 04:59 am"
        ]
    },
    {
        "id": "35b35a68-c201-482d-aa3d-7e7aba1ac3fc",
        "designation": "Backend Developer",
        "department": "Product",
        "budget": 15,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Dec 4, 2022 04:20 pm"
        ]
    },
    {
        "id": "fca7aa94-cf2e-4de4-a58d-9afd3cc3d4e8",
        "designation": "Business Analyst",
        "department": "Other",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Nov 6, 2022 01:17 am"
        ]
    },
    {
        "id": "965c221f-b3bb-4282-8b4f-b6a88966edc0",
        "designation": "Product Manager",
        "department": "Sales",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Jan 7, 2020 07:14 pm"
        ]
    },
    {
        "id": "7cefeed5-48e0-47f0-84c3-c38cacbd0f41",
        "designation": "Business Analyst",
        "department": "Product",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Jul 23, 2020 10:02 am"
        ]
    },
    {
        "id": "553c6adb-34a7-4550-a7a9-feff08b8b66b",
        "designation": "QA Specialist",
        "department": "Sales",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Oct 12, 2020 10:37 am"
        ]
    },
    {
        "id": "1ffb663f-761e-45b3-9784-3caa45b810ce",
        "designation": "Software Engineer",
        "department": "Other",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "Jan 19, 2021 02:55 pm"
        ]
    },
    {
        "id": "334e7856-f6a2-425d-b72c-5fdeb7946478",
        "designation": "Cloud Architect",
        "department": "Engineering",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "Jan 23, 2023 06:57 am"
        ]
    },
    {
        "id": "2c8ee0de-661c-43a8-9fad-f56027550734",
        "designation": "Frontend Developer",
        "department": "Engineering",
        "budget": 12,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "Nov 24, 2020 04:49 am"
        ]
    },
    {
        "id": "636fdbc2-ddfa-4a64-8a29-bfb973e4009f",
        "designation": "Backend Developer",
        "department": "HR",
        "budget": 25,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Apr 9, 2022 05:01 am"
        ]
    },
    {
        "id": "591a3c0d-fb12-47b2-bd6f-ddad5675f9f1",
        "designation": "Cloud Architect",
        "department": "Engineering",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "Nov 5, 2020 10:45 am"
        ]
    },
    {
        "id": "2693dca1-8f44-4d99-9bf5-209f652c1f47",
        "designation": "Product Manager",
        "department": "Sales",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "Feb 10, 2022 06:56 pm"
        ]
    },
    {
        "id": "26bdb2e8-e8ad-4195-b565-6d4f0318cba2",
        "designation": "Software Engineer",
        "department": "Engineering",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Feb 26, 2021 12:38 am"
        ]
    },
    {
        "id": "0b27113c-7d34-4df5-854f-4af9a0f5cd40",
        "designation": "Cloud Architect",
        "department": "Product",
        "budget": 25,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "Apr 30, 2022 08:16 pm"
        ]
    },
    {
        "id": "3b7d4a15-edc8-413f-addc-dc2ca39dfe17",
        "designation": "Data Scientist",
        "department": "Other",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "Aug 21, 2024 04:20 am"
        ]
    },
    {
        "id": "e3f7801b-c190-4a9f-9fe3-df4c1146f886",
        "designation": "HR Designer",
        "department": "Other",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Meet Mehta",
            "Jan 5, 2024 08:59 pm"
        ]
    },
    {
        "id": "9c5bb03f-6eff-45cb-92f4-7703de3c21b9",
        "designation": "Business Analyst",
        "department": "Other",
        "budget": 15,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Jan 31, 2021 12:08 am"
        ]
    },
    {
        "id": "f46a6d67-85cc-4e79-ae49-a08b395f3f66",
        "designation": "Product Manager",
        "department": "Product",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "May 24, 2022 08:47 pm"
        ]
    },
    {
        "id": "9024ae45-0e24-46ad-b72a-337b44b13497",
        "designation": "Cloud Architect",
        "department": "Engineering",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Nov 29, 2021 08:26 pm"
        ]
    },
    {
        "id": "4495de92-1c1e-449a-be40-5b6d3d954615",
        "designation": "DevOps Engineer",
        "department": "Sales",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "May 18, 2023 05:45 pm"
        ]
    },
    {
        "id": "988d3469-fbae-4728-8813-d10d34610733",
        "designation": "QA Specialist",
        "department": "HR",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Sep 20, 2021 05:01 pm"
        ]
    },
    {
        "id": "11bc96ed-3971-40b1-82bb-144bac449f05",
        "designation": "Frontend Developer",
        "department": "HR",
        "budget": 12,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Aug 24, 2024 04:31 am"
        ]
    },
    {
        "id": "641fcdcb-44e5-4cc5-9b50-2857b7b8f766",
        "designation": "QA Specialist",
        "department": "Product",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Meet Mehta",
            "Jun 29, 2024 02:29 am"
        ]
    },
    {
        "id": "4e9a981d-dbe8-4a96-953a-d8ccfee0e256",
        "designation": "Business Analyst",
        "department": "Product",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Sneha Roy",
            "Feb 10, 2021 11:15 am"
        ]
    },
    {
        "id": "7c710aec-4039-4e3e-83a4-86dd5badd1db",
        "designation": "Backend Developer",
        "department": "Other",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Jul 26, 2021 01:51 pm"
        ]
    },
    {
        "id": "9e9ae824-0658-4fb8-800f-9230d3696b9c",
        "designation": "Product Manager",
        "department": "Engineering",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Sneha Roy",
            "Feb 17, 2020 04:10 pm"
        ]
    },
    {
        "id": "c8c1648a-08ac-4435-bf85-38edb742364d",
        "designation": "Programmer Analyst",
        "department": "Sales",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Sneha Roy",
            "Sep 7, 2023 01:40 am"
        ]
    },
    {
        "id": "876709c5-d86d-42db-b6d2-3038347faa25",
        "designation": "Frontend Developer",
        "department": "Product",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "Dec 19, 2023 12:08 am"
        ]
    },
    {
        "id": "8e626f5f-80e2-4bd3-8c2d-82682617e2d8",
        "designation": "Marketing Lead",
        "department": "Sales",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Apr 30, 2020 06:08 am"
        ]
    },
    {
        "id": "fb5ce881-1067-4c13-9f71-b8219ab39fe5",
        "designation": "Marketing Lead",
        "department": "Sales",
        "budget": 25,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Oct 31, 2022 11:27 am"
        ]
    },
    {
        "id": "eb8a4b0d-1c90-4851-9703-cb6d994c3e92",
        "designation": "HR Designer",
        "department": "Product",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Nov 18, 2022 08:44 am"
        ]
    },
    {
        "id": "f5c16c38-9714-48d9-bf82-e8090a226d44",
        "designation": "Data Scientist",
        "department": "Other",
        "budget": 12,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "Dec 14, 2020 11:44 pm"
        ]
    },
    {
        "id": "987d56eb-98d4-4b57-9fa8-d9ac3a6d5df7",
        "designation": "DevOps Engineer",
        "department": "HR",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Apr 18, 2024 11:16 pm"
        ]
    },
    {
        "id": "fc5a5e2e-df85-4d11-9da4-e05c6945a46f",
        "designation": "Business Analyst",
        "department": "Sales",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "Oct 14, 2021 11:25 pm"
        ]
    },
    {
        "id": "f9b0477c-20fa-43a5-8fc3-e1cec8789626",
        "designation": "Product Manager",
        "department": "Engineering",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "Mar 12, 2020 08:46 am"
        ]
    },
    {
        "id": "57d08966-65c9-4bdf-abff-3ae1f8ad6b5d",
        "designation": "Business Analyst",
        "department": "Sales",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Jun 24, 2021 03:26 pm"
        ]
    },
    {
        "id": "99b831eb-54ab-448a-84ff-1016a5ba3eac",
        "designation": "UI Designer",
        "department": "Sales",
        "budget": 12,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Jul 11, 2021 06:27 am"
        ]
    },
    {
        "id": "575fd806-358c-4689-9843-892ef2e2f51c",
        "designation": "Data Scientist",
        "department": "HR",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Jun 10, 2022 08:49 pm"
        ]
    },
    {
        "id": "c3629f1b-5c95-4b28-a044-02dd16553cbd",
        "designation": "Data Scientist",
        "department": "Sales",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "Nov 13, 2020 05:00 am"
        ]
    },
    {
        "id": "e3363942-4869-48db-9bb0-091a1c591175",
        "designation": "Cloud Architect",
        "department": "HR",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Sep 22, 2022 06:54 am"
        ]
    },
    {
        "id": "995c9db3-d8f5-4405-8835-bb822bbfb71e",
        "designation": "Marketing Lead",
        "department": "Product",
        "budget": 15,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "Dec 24, 2021 12:34 am"
        ]
    },
    {
        "id": "5c64aea4-6a37-4279-97fc-6481f2ed8507",
        "designation": "Product Manager",
        "department": "Engineering",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Sneha Roy",
            "Jul 19, 2024 05:00 pm"
        ]
    },
    {
        "id": "81ca7ee3-db4f-40ee-ba0d-6c95909c0d30",
        "designation": "Product Manager",
        "department": "Sales",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Meet Mehta",
            "Apr 14, 2023 03:57 pm"
        ]
    },
    {
        "id": "b683964b-b980-4964-afbe-2fb46491dee5",
        "designation": "Backend Developer",
        "department": "Other",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "May 2, 2020 06:36 am"
        ]
    },
    {
        "id": "129672b5-34f4-4e43-88ba-f06d0bbb0a97",
        "designation": "Frontend Developer",
        "department": "Sales",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "Apr 5, 2023 02:55 pm"
        ]
    },
    {
        "id": "2ef9d008-0398-4c8a-9320-f8337930579b",
        "designation": "Frontend Developer",
        "department": "Product",
        "budget": 30,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Rahul Verma",
            "May 20, 2024 04:12 pm"
        ]
    },
    {
        "id": "aa886b1a-26a1-4cab-9cfc-840e6619bcff",
        "designation": "Backend Developer",
        "department": "Product",
        "budget": 40,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "May 17, 2020 11:17 pm"
        ]
    },
    {
        "id": "77973fef-5d89-45c2-be7a-d8f3239ea925",
        "designation": "DevOps Engineer",
        "department": "Product",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "Jan 15, 2023 01:36 am"
        ]
    },
    {
        "id": "50c8473c-ed56-46ad-9e58-2765999307a7",
        "designation": "UI Designer",
        "department": "Product",
        "budget": 15,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Nov 10, 2022 07:15 pm"
        ]
    },
    {
        "id": "bf944bb0-2bbf-4aff-ae60-0b0918344b30",
        "designation": "Data Scientist",
        "department": "HR",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Aug 14, 2023 08:09 pm"
        ]
    },
    {
        "id": "805625fe-e4ff-4250-9244-cbbcb4aa1fad",
        "designation": "Cloud Architect",
        "department": "Sales",
        "budget": 35,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Jane Smith",
            "Jan 24, 2023 10:56 am"
        ]
    },
    {
        "id": "a2a24d5c-6523-4fa5-a20c-893bc2d76a1a",
        "designation": "Business Analyst",
        "department": "HR",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "John Doe",
            "Nov 7, 2020 02:36 pm"
        ]
    },
    {
        "id": "7b71668a-bda0-434c-8481-6de563285bde",
        "designation": "Data Scientist",
        "department": "Sales",
        "budget": 20,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ankush Menta",
            "Feb 26, 2021 10:54 pm"
        ]
    },
    {
        "id": "750dce44-14fa-428e-b49b-37e3e07bc1e0",
        "designation": "Backend Developer",
        "department": "HR",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Kiran Kumar",
            "Jul 31, 2023 05:53 am"
        ]
    },
    {
        "id": "4e327b90-25db-47bb-9197-7f67e1e68668",
        "designation": "Business Analyst",
        "department": "Sales",
        "budget": 10,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Amit Gupta",
            "Aug 26, 2023 03:44 am"
        ]
    },
    {
        "id": "9bf50e29-0923-4f81-9c52-cdcb5d706e67",
        "designation": "Product Manager",
        "department": "Sales",
        "budget": 18,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Ravi Patel",
            "Mar 31, 2022 04:43 am"
        ]
    },
    {
        "id": "9986a892-fe49-4eba-97a9-8288f3bdd916",
        "designation": "Marketing Lead",
        "department": "Engineering",
        "budget": 8,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Priya Shah",
            "Sep 2, 2021 11:04 pm"
        ]
    },
    {
        "designation": "[\"qa",
        "department": "engineering",
        "budget": 11,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Admin",
            "Sep 16, 2024 03:13 PM"
        ],
        "id": "29a753960b7364"
    },
    {
        "designation": "qa",
        "department": "engineering",
        "budget": 11,
        "location": "Ahmedabad",
        "lastUpdated": [
            "Admin",
            "Sep 16, 2024 03:14 PM"
        ],
        "id": "937e57713b6d3a"
    }
];

export default tableData;