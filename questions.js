const questions = [
    {
        "id": 1,
        "chapter": "Danh sách đặc",
        "difficulty": "Dễ",
        "question": "Trong chương trình chính, muốn thêm phần tử x vào cuối danh sách L ta thực hiện lời gọi sau:",
        "options": [
            "A. InsertList(x, Last(L), L)",
            "B. InsertList(x, Endlist(L), L)",
            "C. InsertList(x, Last(L), &L)",
            "D. insertList(x, endList(L), &L)"
        ],
        "correctAnswer": "D",
        "explanation": "Hàm endList chỉ đọc dữ liệu nên truyền tham trị L. Hàm insertList thay đổi cấu trúc danh sách nên phải truyền địa chỉ &L.",
        "image": null
    },
    {
        "id": 2,
        "chapter": "Danh sách đặc",
        "difficulty": "Dễ",
        "question": "Sau khi thêm phần tử X vào vị trí p trong danh sách đặc L, ta luôn luôn có mệnh đề sau là đúng:",
        "options": [
            "A. L.Elements[p]==X;",
            "B. L.Elements[p+1]==X;",
            "C. Tất cả đều sai.",
            "D. L.Elements[p-1]==X"
        ],
        "correctAnswer": "D",
        "explanation": "Danh sách đặc quy ước vị trí đếm từ 1, nhưng chỉ số mảng đếm từ 0. Phần tử ở vị trí p sẽ nằm ở ô có chỉ số p-1.",
        "image": null
    },
    {
        "id": 3,
        "chapter": "Danh sách đặc",
        "difficulty": "Dễ",
        "question": "Khi thêm phần tử vào danh sách đặc không đầy, ta luôn luôn phải thực hiện lệnh:",
        "options": [
            "A. L->Last--;",
            "B. Tất cả đều sai",
            "C. L->Last++;",
            "D. L.Last++;"
        ],
        "correctAnswer": "C",
        "explanation": "Thêm một phần tử làm độ dài danh sách tăng 1. Hàm truyền con trỏ List *L nên dùng toán tử ->.",
        "image": null
    },
    {
        "id": 4,
        "chapter": "Danh sách đặc",
        "difficulty": "Trung bình",
        "question": "Vị trí phần tử cần xóa ra khỏi danh sách đặc trong phép toán deleteList(p, L) chỉ hợp lệ khi:",
        "options": [
            "A. 1 <= p <= L.Last",
            "B. 1 <= p <= L.Last+1",
            "C. 0 < p < L.Last+1",
            "D. 0 <= p <= L.Last"
        ],
        "correctAnswer": "A",
        "explanation": "Vị trí p đếm từ 1. Để xóa được thì vị trí đó phải chứa dữ liệu (không vượt quá L.Last).",
        "image": null
    },
    {
        "id": 5,
        "chapter": "Danh sách đặc",
        "difficulty": "Trung bình",
        "question": "Trong danh sách đặc, khi xóa phần tử tại vị trí p trong danh sách ta cần phải:",
        "options": [
            "A. Có thể dịch chuyển các phần tử từ p+1 đến L.Last ra sau một vị trí.",
            "B. Luôn luôn dịch chuyển các phần tử từ p đến L.Last ra sau một vị trí.",
            "C. Có thể dịch chuyển các phần tử từ p đến L.Last ra sau một vị trí.",
            "D. Luôn luôn dịch chuyển các phần tử từ p+1 đến L.Last ra sau một vị trí."
        ],
        "correctAnswer": "A",
        "explanation": "Dịch từ p+1 để lấp chỗ trống. Dùng 'Có thể' vì nếu xóa phần tử cuối thì không cần dịch.",
        "image": null
    },
    {
        "id": 6,
        "chapter": "Danh sách đặc",
        "difficulty": "Dễ",
        "question": "Khi xóa phần tử ra khỏi danh sách đặc L không rỗng thì ta phải luôn luôn thực hiện câu lệnh:",
        "options": [
            "A. L.Last--;",
            "B. L->Last++;",
            "C. L->Last--;",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "C",
        "explanation": "Xóa phần tử thì độ dài danh sách giảm 1. Cú pháp chuẩn với con trỏ là L->Last--.",
        "image": null
    },
    {
        "id": 7,
        "chapter": "Danh sách đặc",
        "difficulty": "Trung bình",
        "question": "Cho danh sách đặc có 10 phần tử. Khi xóa phần tử ở vị trí 4 trong danh sách, câu lệnh dịch chuyển tịnh tiến nội dung các phần tử L->Elements[i]=L->Elements[i+1] được thực hiện bao nhiêu lần?",
        "options": [
            "A. 5 lần",
            "B. 6 lần",
            "C. 7 lần",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "B",
        "explanation": "Xóa ở vị trí 4, các phần tử từ 5 đến 10 phải dịch lên trước. Số lượng cần dịch là 10 - 4 = 6 lần.",
        "image": null
    },
    {
        "id": 8,
        "chapter": "Danh sách đặc",
        "difficulty": "Khó",
        "question": "Để xóa 1 phần tử ra khỏi danh sách đặc, hàm cài đặt có lệnh: L->Elements[(1)]=L->Elements[(2)];. Giá trị thích hợp cho (1) và (2) là gì?",
        "options": [
            "A. (1) là Q-1 và (2) là Q",
            "B. (1) là Q và (2) là Q+1",
            "C. (1) là Q+1 và (2) là Q",
            "D. (1) là Q và (2) là Q-1"
        ],
        "correctAnswer": "B",
        "explanation": "Ô hiện tại Q sẽ nhận giá trị của ô phía sau nó là Q+1 để dồn lên.",
        "image": null
    },
    {
        "id": 9,
        "chapter": "Danh sách đặc",
        "difficulty": "Khó",
        "question": "Hàm NONAME có kiểu trả về là Position (con trỏ) nhưng thân hàm lại return 1 và return 0. Hàm này thực hiện được không và làm nhiệm vụ gì?",
        "options": [
            "A. Hàm trả về tìm vị trí phần tử đầu có nội dung là x.",
            "B. Hàm trên bị lỗi ở kiểu dữ liệu trả về cho hàm.",
            "C. Hàm kiểm tra xem có phần tử X trong danh sách hay không.",
            "D. Hàm luôn trả về giá trị 0."
        ],
        "correctAnswer": "B",
        "explanation": "Khai báo kiểu con trỏ nhưng trả về số nguyên gây ra lỗi biên dịch.",
        "image": null
    },
    {
        "id": 10,
        "chapter": "Danh sách liên kết",
        "difficulty": "Dễ",
        "question": "Để tạo một danh sách liên kết đơn có ô đầu mục chứa n phần tử cần cấp phát bao nhiêu vùng nhớ?",
        "options": [
            "A. n+1",
            "B. n-1",
            "C. n",
            "D. n+2"
        ],
        "correctAnswer": "A",
        "explanation": "Gồm n phần tử dữ liệu cộng thêm 1 ô đầu mục (Header).",
        "image": null
    },
    {
        "id": 11,
        "chapter": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "question": "Khi thêm phần tử đầu tiên vào danh sách liên kết L rỗng có ô đầu mục thì:",
        "options": [
            "A. L luôn luôn thay đổi",
            "B. L có thể thay đổi",
            "C. L luôn luôn không đổi",
            "D. L bị hủy"
        ],
        "correctAnswer": "C",
        "explanation": "Biến L trỏ vào Header, chỉ có liên kết Next bên trong Header thay đổi, địa chỉ L không đổi.",
        "image": null
    },
    {
        "id": 12,
        "chapter": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "question": "Khi thêm phần tử vào danh sách liên kết có ô header thì:",
        "options": [
            "A. Ô Header luôn luôn thay đổi",
            "B. Ô Header luôn luôn không đổi",
            "C. Ô Header chỉ thay đổi khi thêm phần tử đầu tiên",
            "D. Ô Header chỉ thay đổi khi thêm ở cuối"
        ],
        "correctAnswer": "C",
        "explanation": "Ô Header chỉ cập nhật liên kết khi danh sách từ rỗng có phần tử đầu tiên.",
        "image": null
    },
    {
        "id": 13,
        "chapter": "Danh sách liên kết",
        "difficulty": "Dễ",
        "question": "Dấu hiệu nào dưới đây cho biết p là phần tử cuối trong danh sách liên kết có ô đầu mục?",
        "options": [
            "A. p->Next == NULL",
            "B. p->Next != NULL",
            "C. p->Element != NULL",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "A",
        "explanation": "Phần tử cuối cùng không trỏ tới đâu nên Next mang giá trị NULL.",
        "image": null
    },
    {
        "id": 14,
        "chapter": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "question": "Lấy nội dung phần tử tại vị trí p trong danh sách liên kết L ta thực hiện lệnh:",
        "options": [
            "A. return L->Element;",
            "B. return p->Element;",
            "C. return p->Next->Element;",
            "D. return L->Next->Element;"
        ],
        "correctAnswer": "C",
        "explanation": "Vị trí p là nút đứng trước, cần dùng p->Next->Element để truy cập phần tử thật.",
        "image": null
    },
    {
        "id": 15,
        "chapter": "Danh sách liên kết",
        "difficulty": "Khó",
        "question": "Để chèn phần tử X vào vị trí P của danh sách liên kết L, thứ tự gọi thực hiện các lệnh là: (1. T->Element = X; 2. T->Next = P->Next; 3. T = malloc... 4. P->Next = T;)",
        "options": [
            "A. 3-4-1-2",
            "B. 3-1-2-4",
            "C. 2-3-4-1",
            "D. 1-2-3-4"
        ],
        "correctAnswer": "B",
        "explanation": "Cấp phát (3) -> Gán (1) -> Nối đuôi (2) -> Cập nhật cha (4).",
        "image": null
    },
    {
        "id": 16,
        "chapter": "Danh sách liên kết",
        "difficulty": "Khó",
        "question": "Để xóa 1 phần tử ở vị trí P ra khỏi danh sách L, thứ tự gọi thực hiện lệnh là: (1. free(T); 2. T = P->Next; 3. P->Next = T->Next;)",
        "options": [
            "A. 1-2-3",
            "B. 3-1-2",
            "C. 2-3-1",
            "D. 3-2-1"
        ],
        "correctAnswer": "C",
        "explanation": "Giữ nút cần xóa (2) -> Nối tắt để loại bỏ (3) -> Giải phóng vùng nhớ (1).",
        "image": null
    },
    {
        "id": 17,
        "chapter": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "question": "Phép toán End_List(L) trả về kết quả là:",
        "options": [
            "A. nội dung phần tử sau phần tử cuối cùng",
            "B. vị trí sau phần tử cuối cùng",
            "C. nội dung phần tử cuối cùng",
            "D. vị trí phần tử cuối cùng"
        ],
        "correctAnswer": "B",
        "explanation": "End_List trả về vị trí trống ngay sau phần tử cuối cùng làm mốc để thêm.",
        "image": null
    },
    {
        "id": 18,
        "chapter": "Danh sách liên kết",
        "difficulty": "Dễ",
        "question": "Độ phức tạp về thời gian để chèn một phần tử vào đầu danh sách liên kết (đầu đã biết) là bao nhiêu?",
        "options": [
            "A. O(n)",
            "B. O(n^2)",
            "C. O(nlogn)",
            "D. O(1)"
        ],
        "correctAnswer": "D",
        "explanation": "Chỉ cần thay đổi 2 liên kết con trỏ, không phụ thuộc độ dài danh sách.",
        "image": null
    },
    {
        "id": 19,
        "chapter": "Danh sách liên kết",
        "difficulty": "Dễ",
        "question": "Độ phức tạp về thời gian để tìm một phần tử trong danh sách liên kết là bao nhiêu?",
        "options": [
            "A. O(nlogn)",
            "B. O(n)",
            "C. O(n^2)",
            "D. O(1)"
        ],
        "correctAnswer": "B",
        "explanation": "Phải duyệt tuần tự từ đầu đến cuối danh sách nên độ phức tạp là O(n).",
        "image": null
    },
    {
        "id": 20,
        "chapter": "Danh sách liên kết",
        "difficulty": "Trung bình",
        "question": "Giả sử hàm Parent trả ra nút cha của nút n. Hàm What(n, m) kiểm tra Parent(n) == Parent(m) sẽ trả về TRUE trong trường hợp nào?",
        "options": [
            "A. Hai nút có quan hệ tiền bối",
            "B. Hai nút có quan hệ cha con",
            "C. Hai nút khác nhánh",
            "D. Hai nút là anh em ruột"
        ],
        "correctAnswer": "D",
        "explanation": "Có cùng nút cha nghĩa là hai nút anh em ruột.",
        "image": null
    },
    {
        "id": 21,
        "chapter": "Danh sách liên kết",
        "difficulty": "Dễ",
        "question": "Hàm XYZ(struct Node* n) trả về n->parent có kết quả là gì?",
        "options": [
            "A. Trả ra nút cha của nút n",
            "B. Một câu trả lời khác",
            "C. Trả ra nút con của nút n",
            "D. Trả ra nút gốc của cây"
        ],
        "correctAnswer": "A",
        "explanation": "Trường parent trỏ đến nút cha của nút n.",
        "image": null
    },
    {
        "id": 22,
        "chapter": "Stack Queue",
        "difficulty": "Dễ",
        "question": "Nguyên tắc làm việc của ngăn xếp (Stack) là:",
        "options": [
            "A. FIFO",
            "B. FILO",
            "C. LILO",
            "D. Không câu nào đúng"
        ],
        "correctAnswer": "B",
        "explanation": "Ngăn xếp hoạt động theo cơ chế First In Last Out (FILO) hay LIFO.",
        "image": null
    },
    {
        "id": 23,
        "chapter": "Stack Queue",
        "difficulty": "Dễ",
        "question": "Cấu trúc nào sau đây có khi thao tác các phần tử theo thứ tự vào trước ra trước (FIFO)?",
        "options": [
            "A. Danh sách đặc",
            "B. Hàng đợi",
            "C. Danh sách liên kết",
            "D. Ngăn xếp"
        ],
        "correctAnswer": "B",
        "explanation": "FIFO (First In First Out) là nguyên tắc của Hàng đợi.",
        "image": null
    },
    {
        "id": 24,
        "chapter": "Stack Queue",
        "difficulty": "Dễ",
        "question": "Vị trí để thêm phần tử vào hàng đợi là:",
        "options": [
            "A. Vị trí đầu hàng",
            "B. Vị trí bất kỳ",
            "C. Vị trí cuối hàng",
            "D. Giữa hàng"
        ],
        "correctAnswer": "C",
        "explanation": "Thêm vào hàng đợi luôn diễn ra ở cuối hàng (Rear).",
        "image": null
    },
    {
        "id": 25,
        "chapter": "Stack Queue",
        "difficulty": "Trung bình",
        "question": "Thao tác nào không được phép dùng trên cấu trúc ngăn xếp?",
        "options": [
            "A. Xóa phần tử ở vị trí bất kì; Thêm phần tử vào vị trí bất kì.",
            "B. Thêm phần tử vào vị trí bất kì.",
            "C. Thêm phần tử vào đỉnh.",
            "D. Xóa phần tử ở vị trí bất kì."
        ],
        "correctAnswer": "A",
        "explanation": "Mọi thao tác của ngăn xếp chỉ thực hiện ở Đỉnh (Top).",
        "image": null
    },
    {
        "id": 26,
        "chapter": "Stack Queue",
        "difficulty": "Trung bình",
        "question": "Hàm nào thao tác trên ngăn xếp không làm thay đổi vị trí đỉnh ngăn xếp?",
        "options": [
            "A. Tất cả đều đúng",
            "B. POP",
            "C. PUSH",
            "D. TOP"
        ],
        "correctAnswer": "D",
        "explanation": "Hàm TOP chỉ đọc giá trị tại đỉnh mà không xóa phần tử đó.",
        "image": null
    },
    {
        "id": 27,
        "chapter": "Stack Queue",
        "difficulty": "Khó",
        "question": "Khi duyệt qua toàn bộ 1 ngăn xếp, ngăn xếp trở nên rỗng?",
        "options": [
            "A. Đúng",
            "B. Sai",
            "C. Tùy trường hợp",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "A",
        "explanation": "Phải lấy (Pop) phần tử ở trên ra mới thấy phần tử tiếp theo, dẫn đến rỗng ngăn xếp.",
        "image": null
    },
    {
        "id": 28,
        "chapter": "Stack Queue",
        "difficulty": "Khó",
        "question": "Khi thêm phần tử vào hàng đợi cài đặt bằng mảng vòng không rỗng thì:",
        "options": [
            "A. Front và Rear có thể thay đổi",
            "B. Front có thể thay đổi, Rear luôn thay đổi",
            "C. Front không đổi, Rear có thể thay đổi",
            "D. Front không đổi, Rear luôn thay đổi"
        ],
        "correctAnswer": "D",
        "explanation": "Rear luôn đổi khi thêm, Front không đổi vì hàng không rỗng.",
        "image": null
    },
    {
        "id": 29,
        "chapter": "Stack Queue",
        "difficulty": "Khó",
        "question": "Khi xóa phần tử ra khỏi hàng cài đặt bằng mảng vòng thì:",
        "options": [
            "A. Front luôn thay đổi, Rear không đổi",
            "B. Front luôn thay đổi, Rear có thể thay đổi",
            "C. Front có thể thay đổi, Rear có thể thay đổi",
            "D. Front có thể thay đổi, Rear không đổi"
        ],
        "correctAnswer": "B",
        "explanation": "Xóa phần tử cuối làm reset cả Front và Rear về -1, nên Rear có thể thay đổi.",
        "image": null
    },
    {
        "id": 30,
        "chapter": "Stack Queue",
        "difficulty": "Trung bình",
        "question": "Khi xóa phần tử ra khỏi hàng đợi cài đặt bằng mảng tịnh tiến không rỗng thì:",
        "options": [
            "A. Front luôn giảm 1",
            "B. Front luôn tăng 1",
            "C. Rear luôn giảm 1",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "B",
        "explanation": "Xóa phần tử ở mảng tịnh tiến làm con trỏ Front nhích lên 1 ô (Front++).",
        "image": null
    },
    {
        "id": 31,
        "chapter": "Stack Queue",
        "difficulty": "Trung bình",
        "question": "Khi hàng (mảng tịnh tiến) bị tràn có thể khắc phục bằng cách dời các phần tử lên bao nhiêu vị trí?",
        "options": [
            "A. Rear",
            "B. Front - Rear",
            "C. Rear - Front",
            "D. Front"
        ],
        "correctAnswer": "D",
        "explanation": "Dời toàn bộ về vị trí 0, tức dời lên Front vị trí.",
        "image": null
    },
    {
        "id": 32,
        "chapter": "Stack Queue",
        "difficulty": "Trung bình",
        "question": "Đoạn lệnh while (!EMPTY_QUEUE(Q)) DEQUEUE(Q) có ý nghĩa gì?",
        "options": [
            "A. In ra tất cả các phần tử",
            "B. Xóa phần tử đầu",
            "C. Làm rỗng hàng đợi",
            "D. Tìm kiếm"
        ],
        "correctAnswer": "C",
        "explanation": "Liên tục xóa cho đến khi hết phần tử, tức là làm rỗng hàng đợi.",
        "image": null
    },
    {
        "id": 33,
        "chapter": "Stack Queue",
        "difficulty": "Khó",
        "question": "Cho hàng đợi DSLK chứa A, T, O, M. Thay đổi thế nào sau khi thêm F, G và xóa 1 phần tử?",
        "options": [
            "A. Xóa A, Front trỏ vào T, Rear trỏ vào G.",
            "B. Xóa M, Front trỏ vào A, Rear trỏ vào G.",
            "C. Thêm F, G vào đầu, xóa M.",
            "D. Tất cả đều sai."
        ],
        "correctAnswer": "A",
        "explanation": "Thêm F, G vào cuối (Rear trỏ G), xóa A ở đầu (Front trỏ T).",
        "image": null
    },
    {
        "id": 34,
        "chapter": "Stack Queue",
        "difficulty": "Khó",
        "question": "Cho ngăn xếp chứa A, B, C, D (đỉnh là A). Kết quả sau khi xóa 2 phần tử, rồi thêm vào P và Q?",
        "options": [
            "A. Đỉnh ngăn xếp chứa P, C, D",
            "B. Đỉnh ngăn xếp chứa Q, P, C, D",
            "C. Tất cả đều sai",
            "D. Đỉnh chứa P, Q, C"
        ],
        "correctAnswer": "B",
        "explanation": "Xóa A, B còn C, D; thêm P, Q lên đỉnh tạo thành thứ tự Q, P, C, D.",
        "image": null
    },
    {
        "id": 35,
        "chapter": "Stack Queue",
        "difficulty": "Khó",
        "question": "Khi xóa phần tử ra khỏi hàng đợi mảng vòng không rỗng thì Q.Front cập nhật theo công thức?",
        "options": [
            "A. Q->Front = Q->Front + 1 % Maxlength;",
            "B. Q->Front = Q->Front % Maxlength + 1;",
            "C. Q->Front = (Q->Front + 1) % Maxlength;",
            "D. Tất cả đều sai."
        ],
        "correctAnswer": "C",
        "explanation": "Công thức tính mảng vòng chuẩn để tránh tràn mảng.",
        "image": null
    },
    {
        "id": 36,
        "chapter": "Tree",
        "difficulty": "Dễ",
        "question": "Dựa vào sơ đồ cây tổng quát, phát biểu nào sau đây là đúng?",
        "options": [
            "A. Cây có bậc 5, chiều cao 3, nút nhãn 9 có độ sâu 2",
            "B. Cây có bậc 5, chiều cao 3, nút nhãn 9 có độ sâu 1",
            "C. Cây có bậc 5, chiều cao 4, nút nhãn 9 có độ sâu 1",
            "D. Cây có bậc 3, chiều cao 2, nút nhãn 9 có độ sâu 2"
        ],
        "correctAnswer": "A",
        "explanation": "Gốc 50 có 5 con (bậc 5), chiều cao đường đi dài nhất là 3, nút 9 nằm ở tầng 2.",
        "image": "tree_36"
    },
    {
        "id": 37,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Danh sách duyệt tiền tự của cây tổng quát trên là:",
        "options": [
            "A. 50, 3, 25, 2, 5, 11, 7, 13, 57, 7, 18, 9, 17",
            "B. 50, 3, 25, 2, 5, 11, 17, 13, 57, 7, 18, 9, 7",
            "C. 3, 50, 25, 2, 5, 11, 7, 13, 57, 7, 18, 9, 17",
            "D. 3, 50, 5, 2, 25, 13, 7, 57, 11, 18, 7, 9, 17"
        ],
        "correctAnswer": "A",
        "explanation": "Duyệt tiền tự cây tổng quát thăm gốc trước, rồi lần lượt các cây con từ trái sang phải.",
        "image": "tree_36"
    },
    {
        "id": 38,
        "chapter": "Tree",
        "difficulty": "Dễ",
        "question": "Dựa vào sơ đồ cây tổng quát 2, phát biểu nào là đúng?",
        "options": [
            "A. Cây có bậc 2, chiều cao 2, nút nhãn 69 có độ sâu 2",
            "B. Cây có bậc 2, chiều cao 3, nút nhãn 69 có độ sâu 1",
            "C. Cây có bậc 3, chiều cao 2, nút nhãn 69 có độ sâu 1",
            "D. Cây có bậc 3, chiều cao 3, nút nhãn 69 có độ sâu 2"
        ],
        "correctAnswer": "D",
        "explanation": "Nút 25 có 3 con (bậc 3), lá sâu nhất là 75 và 57 (độ sâu 3), nút 69 ở mức 2.",
        "image": "tree_38"
    },
    {
        "id": 39,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Kết quả duyệt trung tự cây tổng quát 2 là:",
        "options": [
            "A. 13 25 75 21 33 30 11 57 48 27 17 69",
            "B. 30 25 13 21 75 33 11 27 48 57 69 17",
            "C. 13 25 75 21 33 30 11 57 48 27 69 17",
            "D. 13 75 21 33 25 11 57 48 17 69 27 30"
        ],
        "correctAnswer": "A",
        "explanation": "Trung tự tổng quát: Con đầu tiên -> Gốc -> Các con còn lại.",
        "image": "tree_38"
    },
    {
        "id": 40,
        "chapter": "Tree",
        "difficulty": "Dễ",
        "question": "Danh sách duyệt theo mức của cây nhị phân trên là:",
        "options": [
            "A. 20, 10, 29, 36, 43, 31, 59, 78, 65, 54",
            "B. 54, 31, 65, 29, 43, 59, 78, 10, 36, 20",
            "C. 54, 31, 29, 10, 20, 43, 36, 65, 59, 78",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "B",
        "explanation": "Duyệt theo mức quét ngang các tầng từ trên xuống, từ trái sang phải.",
        "image": "tree_40"
    },
    {
        "id": 41,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Cho cây tổng quát T2 cài đặt bằng mảng parent. Anh em ruột phải của nút E là:",
        "options": [
            "A. F",
            "B. G",
            "C. H",
            "D. Không có"
        ],
        "correctAnswer": "A",
        "explanation": "Nút E và F có cùng nút cha là B (chỉ số 1). E đứng trước F nên F là anh em ruột phải.",
        "image": "tree_41"
    },
    {
        "id": 42,
        "chapter": "Tree",
        "difficulty": "Dễ",
        "question": "Chiều cao của cây được định nghĩa là:",
        "options": [
            "A. Độ dài đường đi đi từ nút gốc đến nút lá xa nhất",
            "B. Số nút con của nút gốc",
            "C. Độ dài đường đi lớn nhất trên cây",
            "D. Câu A và C đều đúng"
        ],
        "correctAnswer": "D",
        "explanation": "Chiều cao cây là đường đi dài nhất từ gốc xuống lá.",
        "image": null
    },
    {
        "id": 43,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Cây T là cây có đường đi lớn nhất là đường nào? (Biết cây T khôi phục có gốc 1, trái 2->4->5/6, phải 3->7->8->9/10)",
        "options": [
            "A. 1,3,5,6",
            "B. 10,9,7,6",
            "C. 2,3,5,6",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "D",
        "explanation": "Đường đi dài nhất qua 1,3,7,8,9 hoặc 1,3,7,8,10. Các đáp án A, B, C đều sai.",
        "image": null
    },
    {
        "id": 44,
        "chapter": "Tree",
        "difficulty": "Dễ",
        "question": "Cây nhị phân cân bằng hoàn toàn là cây:",
        "options": [
            "A. Nút con trái và con phải lệch nhau 1.",
            "B. Mỗi nút có tổng nút con trái và con phải lệch tối đa 1.",
            "C. Mỗi nút có chiều cao con trái và con phải lệch tối đa 1.",
            "D. Mỗi nút có tổng nút con trái và con phải lệch nhau 1."
        ],
        "correctAnswer": "B",
        "explanation": "Cân bằng hoàn toàn xét trên tổng số lượng nút của 2 nhánh.",
        "image": null
    },
    {
        "id": 45,
        "chapter": "Tree",
        "difficulty": "Dễ",
        "question": "Cây nhị phân cân bằng tương đối là cây:",
        "options": [
            "A. Tại mỗi nút đều có chiều cao con trái và con phải lệch tối đa 1.",
            "B. Mỗi nút có tổng nút con trái và con phải lệch nhau tối đa 1.",
            "C. Tại mỗi nút có chiều cao lệch nhau 1.",
            "D. Chiều cao lệch nhau 1."
        ],
        "correctAnswer": "A",
        "explanation": "Cân bằng tương đối xét trên chiều cao (định nghĩa AVL).",
        "image": null
    },
    {
        "id": 46,
        "chapter": "Tree",
        "difficulty": "Dễ",
        "question": "Cây tìm kiếm nhị phân là cây nhị phân với:",
        "options": [
            "A. Nhãn của nút lớn hơn tất cả cây con trái và nhỏ hơn tất cả cây con phải",
            "B. Lớn hơn tất cả cây con phải, nhỏ hơn cây con trái",
            "C. Lớn hơn nút con phải, nhỏ hơn nút con trái",
            "D. Lớn hơn nút con trái, nhỏ hơn nút con phải"
        ],
        "correctAnswer": "A",
        "explanation": "Tính chất áp dụng cho toàn bộ các nút trong cây con, không chỉ xét nút trực tiếp.",
        "image": null
    },
    {
        "id": 47,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Danh sách duyệt trung tự nhị phân và trung tự tổng quát khác nhau khi và chỉ khi:",
        "options": [
            "A. Có tồn tại nút bị khuyết con phải",
            "B. Có tồn tại nút bị khuyết con trái",
            "C. Có tồn tại nút có con trái và bị khuyết con phải",
            "D. Có tồn tại nút có con phải và bị khuyết con trái"
        ],
        "correctAnswer": "D",
        "explanation": "Nếu khuyết trái, nhánh phải được trung tự tổng quát thăm TRƯỚC gốc.",
        "image": null
    },
    {
        "id": 48,
        "chapter": "Tree",
        "difficulty": "Khó",
        "question": "Danh sách duyệt hậu tự của cây nhị phân T1 cho bởi NLR: A, B, C, D, G, E, F và LNR: C, B, D, G, A, E, F là:",
        "options": [
            "A. Không hợp lệ",
            "B. C, G, D, B, F, E, A",
            "C. C, B, G, E, D, A, F",
            "D. C, G, D, B, E, F, A"
        ],
        "correctAnswer": "B",
        "explanation": "Hậu tự (LRN) của sơ đồ trên ra C, G, D, B, F, E, A.",
        "image": "tree_48"
    },
    {
        "id": 49,
        "chapter": "Tree",
        "difficulty": "Khó",
        "question": "Cho cây nhị phân từ LRN: 5, 6, 4, 2, 9, 10, 8, 7, 3, 1 và LNR: 2, 5, 4, 6, 1, 7, 9, 8, 10, 3. Chiều cao của cây là?",
        "options": [
            "A. 2",
            "B. 5",
            "C. 3",
            "D. 4"
        ],
        "correctAnswer": "D",
        "explanation": "Đường đi dài nhất qua 5 nút (1->3->7->8->9), tương đương với 4 cạnh.",
        "image": null
    },
    {
        "id": 50,
        "chapter": "Tree",
        "difficulty": "Khó",
        "question": "Cây trên (câu 49) có số nút trung gian là?",
        "options": [
            "A. 4",
            "B. 5",
            "C. 6",
            "D. 7"
        ],
        "correctAnswer": "B",
        "explanation": "Tổng 10 nút trừ đi 1 gốc và 4 lá = 5 nút trung gian.",
        "image": null
    },
    {
        "id": 51,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Dựa vào sơ đồ cây T1 ở trên, chiều cao của cây T1 là?",
        "options": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
        ],
        "correctAnswer": "C",
        "explanation": "Đường đi dài nhất là A->B->D->G qua 4 nút, có 3 cạnh.",
        "image": "tree_48"
    },
    {
        "id": 52,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Dựa vào sơ đồ cây T1 ở trên, nút D là:",
        "options": [
            "A. Nút lá",
            "B. Nút chỉ có con phải G",
            "C. Nút chỉ có con trái G",
            "D. Nút có hai con C và G"
        ],
        "correctAnswer": "B",
        "explanation": "Trong cây T1, D là con phải của B và chỉ có con phải là G.",
        "image": "tree_48"
    },
    {
        "id": 53,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Dựa vào sơ đồ cây tổng quát T2 ở trên. Chiều cao của cây là?",
        "options": [
            "A. 2",
            "B. 3",
            "C. 4",
            "D. 5"
        ],
        "correctAnswer": "C",
        "explanation": "Đường đi dài nhất từ A -> B -> E -> I qua 4 nút -> 3 cạnh. Theo mảng mở rộng là 4.",
        "image": "tree_41"
    },
    {
        "id": 54,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Dựa vào sơ đồ BST trên, khi xóa nút 27, ta thực hiện:",
        "options": [
            "A. Cho con phải của nút 12 trỏ xuống nút 24.",
            "B. Thay nút 27 bởi nút 24 và quay về xóa nút 24.",
            "C. Cho con phải của nút 12 trỏ xuống nút 20.",
            "D. Thay nút 27 bởi nút 20."
        ],
        "correctAnswer": "C",
        "explanation": "Xóa nút có 1 con: Lấy con đó (20) nối thẳng lên thế chỗ cho mình.",
        "image": "tree_54"
    },
    {
        "id": 55,
        "chapter": "Tree",
        "difficulty": "Khó",
        "question": "Dựa vào sơ đồ BST 2 trên, khi xóa nút 50, ta thực hiện:",
        "options": [
            "A. Thay nhãn 50 bằng nhãn 60 và xóa nút có nhãn 60",
            "B. Tất cả đều đúng.",
            "C. Thay nhãn 50 bằng nhãn 65 và xóa nút có nhãn 65",
            "D. Thay nhãn 50 bằng nhãn 35"
        ],
        "correctAnswer": "A",
        "explanation": "Xóa nút 2 con: Thay bằng nút lớn nhất nhánh trái hoặc nhỏ nhất nhánh phải (60).",
        "image": "tree_55"
    },
    {
        "id": 56,
        "chapter": "Tree",
        "difficulty": "Dễ",
        "question": "Với cây tìm kiếm nhị phân cân bằng có N phần tử. Độ phức tạp tìm kiếm 1 nút là:",
        "options": [
            "A. O(n)",
            "B. O(n log n)",
            "C. O(log n)",
            "D. O(n^2)"
        ],
        "correctAnswer": "C",
        "explanation": "Cây cân bằng giúp chiều cao giữ ở mức log(n), nên tìm kiếm tốn O(log n).",
        "image": null
    },
    {
        "id": 57,
        "chapter": "Tree",
        "difficulty": "Dễ",
        "question": "Cho một dãy số giảm dần. Cây tìm kiếm nhị phân dựng từ dãy số này sẽ là:",
        "options": [
            "A. Cây ziczac",
            "B. Cây nhị phân cân bằng",
            "C. Cây lệch phải",
            "D. Cây lệch trái"
        ],
        "correctAnswer": "D",
        "explanation": "Số sau nhỏ hơn số trước nên liên tục được chèn vào bên trái.",
        "image": null
    },
    {
        "id": 58,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Số bước cần duyệt để tìm nút 25 trên sơ đồ cây tìm kiếm nhị phân gốc 35 là?",
        "options": [
            "A. 4",
            "B. 3",
            "C. 6",
            "D. 5"
        ],
        "correctAnswer": "C",
        "explanation": "Hành trình: 35 -> 12 -> 27 -> 20 -> 24 -> NULL. Tính cả bước rẽ xuống NULL là 6 bước.",
        "image": "tree_54"
    },
    {
        "id": 59,
        "chapter": "Tree",
        "difficulty": "Dễ",
        "question": "Phát biểu nào sau đây là đúng về cây tìm kiếm nhị phân?",
        "options": [
            "A. Cây TKNP không phải là cây nhị phân.",
            "B. Không thể xóa một nút trên cây TKNP nếu khóa lớn hơn khóa của nút cha.",
            "C. Phải thêm theo đúng qui tắc.",
            "D. Tất cả đều sai."
        ],
        "correctAnswer": "C",
        "explanation": "Phải tuân thủ quy tắc giá trị nhỏ hơn rẽ trái, lớn hơn rẽ phải khi thêm.",
        "image": null
    },
    {
        "id": 60,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Chiều cao của cây tìm kiếm nhị phân cho bởi danh sách: 45, 60, 20, 76, 10, 82, 78 là?",
        "options": [
            "A. 2",
            "B. 4",
            "C. 5",
            "D. 3"
        ],
        "correctAnswer": "B",
        "explanation": "Đường đi dài nhất: 45 -> 60 -> 76 -> 82 -> 78 (5 nút -> 4 cạnh).",
        "image": null
    },
    {
        "id": 61,
        "chapter": "Tree",
        "difficulty": "Trung bình",
        "question": "Khi thêm nút 9 vào cây tìm kiếm nhị phân A (cho bởi danh sách 10, 15, 8, 4, 20, 5, 1, 3, 14, 15) ta sẽ cho?",
        "options": [
            "A. Nút 9 là con trái của nút 14",
            "B. Nút 9 là con phải của nút 5",
            "C. Nút 9 là con phải của nút 8",
            "D. Nút 9 là con phải của nút 3"
        ],
        "correctAnswer": "C",
        "explanation": "9 < 10 (trái), 9 > 8 (phải). Nút 8 chưa có con phải nên 9 được gán làm con phải nút 8.",
        "image": null
    },
    {
        "id": 62,
        "chapter": "Tree",
        "difficulty": "Khó",
        "question": "Khi xóa nút 8 ra khỏi cây A (nút 8 có con trái 4, con phải 9), ta thực hiện:",
        "options": [
            "A. Thay nút 8 bằng nút 4 và quay về xóa nút 4",
            "B. Thay nút 8 bằng nút 5 và quay về xóa nút 5",
            "C. Thay nút 8 bằng nút 10 và quay về xóa nút 10",
            "D. Cho con trái của nút 10 trỏ xuống nút 4"
        ],
        "correctAnswer": "B",
        "explanation": "Quy tắc thế mạng cho nút 2 con: Thay bằng nút lớn nhất nhánh trái (nút 5).",
        "image": null
    },
    {
        "id": 63,
        "chapter": "Tree",
        "difficulty": "Khó",
        "question": "Dựa vào sơ đồ AVL trên, thêm giá trị 45 vào cây và cho biết kết quả duyệt tiền tự sau khi thêm?",
        "options": [
            "A. 10 45 30 20 70 50",
            "B. 50 20 10 30 45 70",
            "C. 30 20 10 50 45 70",
            "D. 10 20 45 30 70 50"
        ],
        "correctAnswer": "B",
        "explanation": "Sau khi thêm 45 vào phải của 30, cây mất cân bằng và phải quay. Duyệt NLR ra 50 20 10 30 45 70.",
        "image": "tree_63"
    },
    {
        "id": 64,
        "chapter": "Tree",
        "difficulty": "Dễ",
        "question": "Sơ đồ cây nhị phân trên là cây cân bằng tương đối, đúng hay sai?",
        "options": [
            "A. Đúng.",
            "B. Sai.",
            "C. Không xác định",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "A",
        "explanation": "Nhánh trái cao 1, nhánh phải cao 2. Chênh lệch là 1, thỏa mãn điều kiện cân bằng AVL.",
        "image": "tree_64"
    },
    {
        "id": 65,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Trung bình",
        "question": "Cho biểu thức a+b*((c-d)*e+f/h). Biểu thức tiền tố là:",
        "options": [
            "A. + * a + b - c d * e / f h",
            "B. + a * b + * - c d e / f h",
            "C. + a b * * e - c d + / f h",
            "D. + * a b + * - c d e / f h"
        ],
        "correctAnswer": "B",
        "explanation": "Phép + ở ngoài cùng được thực hiện cuối nên được đưa lên đầu tiền tố.",
        "image": null
    },
    {
        "id": 66,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Trung bình",
        "question": "Cho biểu thức trung tố (a*(5+b)-2*c)+4, biểu thức dạng hậu tố là:",
        "options": [
            "A. a 5 b + * 2 c * - 4 +",
            "B. a 5 b + * 2 - c * 4 +",
            "C. a 5 * b + 2 - c * 4 +",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "A",
        "explanation": "Chuyển từ trong ngoặc ra: (5 b +) * a -> (a 5 b + *) - (2 c *) -> (a 5 b + * 2 c * -) 4 +.",
        "image": null
    },
    {
        "id": 67,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Trung bình",
        "question": "Dựa vào sơ đồ cây biểu thức trên. Biểu thức toán học là:",
        "options": [
            "A. A/B+C*D-E",
            "B. (A/B+C)*D-E",
            "C. (A/B+C)*(D-E)",
            "D. A/B+C*(D-E)"
        ],
        "correctAnswer": "C",
        "explanation": "Phép * ở gốc thực hiện cuối, do đó 2 nhánh phải được bọc trong ngoặc tròn.",
        "image": "tree_67"
    },
    {
        "id": 68,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Khó",
        "question": "Giá trị biểu thức hậu tố 1, 2, 3, 4, +, *, 7, 6, 5, -, *, / là:",
        "options": [
            "A. 7",
            "B. 1",
            "C. -1",
            "D. Khác"
        ],
        "correctAnswer": "C",
        "explanation": "Tính: (1-2) * (3+4) / (7 * (6-5)) = -1 * 7 / (7 * 1) = -1.",
        "image": null
    },
    {
        "id": 69,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Khó",
        "question": "Giá trị biểu thức tiền tố /, *, -, 2, 1, +, 3, 4, *, 7, -, 6, 5 là:",
        "options": [
            "A. -1",
            "B. 1",
            "C. 7",
            "D. -7"
        ],
        "correctAnswer": "B",
        "explanation": "Tính từ phải sang trái bằng Stack: (2-1) * (3+4) / (7 * (6-5)) = 1 * 7 / 7 = 1.",
        "image": null
    },
    {
        "id": 70,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Dễ",
        "question": "Ta thực hiện giải thuật gì khi cây AVL bị mất cân bằng mô hình Ziczac (Trái-Phải hoặc Phải-Trái)?",
        "options": [
            "A. Thực hiện quay kép Phải-Trái.",
            "B. Thực hiện quay kép Trái-Phải.",
            "C. Thực hiện quay đơn sang trái.",
            "D. Thực hiện quay đơn sang phải."
        ],
        "correctAnswer": "A",
        "explanation": "Mất cân bằng ziczac bắt buộc phải dùng quay kép.",
        "image": null
    },
    {
        "id": 71,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Dễ",
        "question": "Khi thêm phần tử X vào bảng băm mở, ta sẽ xen phần tử đó vào đầu của danh sách ở vị trí:",
        "options": [
            "A. Bucket B-1",
            "B. Bucket bất kỳ",
            "C. Bucket H(X)",
            "D. Bucket 0"
        ],
        "correctAnswer": "C",
        "explanation": "Dữ liệu được lưu vào bucket được tính toán từ hàm băm h(x).",
        "image": null
    },
    {
        "id": 72,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Dễ",
        "question": "Để giải quyết đụng độ trong bảng băm mở, người ta dùng:",
        "options": [
            "A. Phương pháp dây chuyền bằng cách dùng các danh sách liên kết.",
            "B. Lựa chọn hàm băm sao cho dễ tính.",
            "C. Băm lại bằng hàm băm thứ hai.",
            "D. Tất cả các phương án còn lại đều đúng."
        ],
        "correctAnswer": "A",
        "explanation": "Băm mở (Chaining) dùng danh sách liên kết cho mỗi bucket.",
        "image": null
    },
    {
        "id": 73,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Trung bình",
        "question": "Giả sử bảng băm D có 7 bucket, hàm băm h(x)=x mod 7. Sau khi đưa vào các khoá 1, 26, 63, 40, 67, 9, 18, 53, kết quả của D[5] như hình là?",
        "options": [
            "A. 67, 18, 53",
            "B. 40, 26",
            "C. 26, 40",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "B",
        "explanation": "Các khóa chia 7 dư 5 là 26 và 40. Chèn đầu danh sách thì 40 vào sau sẽ đứng trước 26.",
        "image": "hash_73"
    },
    {
        "id": 74,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Khó",
        "question": "Dùng băm lại tuyến tính (x+i % B). Thêm 3, 5, 9, 15, xoá 5, thêm 26, thêm 30, xoá 3. Kết quả như hình là:",
        "options": [
            "A. Ô 0 chứa 30, Ô 4 chứa 26, Ô 6 chứa 15",
            "B. Ô 0 chứa 30, Ô 5 chứa 15, Ô 6 chứa 26",
            "C. Ô 0 chứa 30, Ô 6 chứa 26, Ô 7 chứa 15",
            "D. Một kết quả khác"
        ],
        "correctAnswer": "A",
        "explanation": "Xóa 5 để lại cờ Deleted. Thêm 15 đụng 5 sang 6. Thêm 26 đụng 15 (ô 6) tịnh tiến sang ô 4.",
        "image": "hash_74"
    },
    {
        "id": 75,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Khó",
        "question": "Dùng băm lại bình phương (x+i^2 % B). Khóa 15 ở ô 5, khóa 16 ở ô 6. Thêm khóa 25 sẽ vào ô nào như hình?",
        "options": [
            "A. Ô 7",
            "B. Ô 8",
            "C. Ô 4",
            "D. Ô 5"
        ],
        "correctAnswer": "C",
        "explanation": "25 mod 10 = 5 (đụng). i=1: 26->6 (đụng). i=2: 29->9. i=3: 34->4. Dừng ở ô 4.",
        "image": "hash_75"
    },
    {
        "id": 76,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Dễ",
        "question": "Hàm băm nào hiệu quả nhất cho bảng băm B=50?",
        "options": [
            "A. h(x) = x % B",
            "B. h(x) = B - 1",
            "C. h(x) = B / 2",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "A",
        "explanation": "Phép chia lấy dư phân phối khóa đều nhất.",
        "image": null
    },
    {
        "id": 77,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Khó",
        "question": "Cho đoạn lệnh nối danh sách: p3->Next->Next = p1->Next; L->Next = p3->Next; p1->Next = NULL; p3->Next = p1; p1->Element = retrieve(p3, L); PrintList(L); Nếu ds ban đầu là (B, E, A, R), kết quả là:",
        "options": [
            "A. REAB",
            "B. BEAR",
            "C. REAR",
            "D. Một danh sách khác"
        ],
        "correctAnswer": "A",
        "explanation": "Các lệnh cắt nối con trỏ đảo ngược đuôi thành R -> E -> A -> B.",
        "image": null
    },
    {
        "id": 78,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Trung bình",
        "question": "Cho hai tập hợp A={1,3,5,7} và B={2,3,4,6}. Kết quả giao của hai tập hợp bằng vecto bit là:",
        "options": [
            "A. F F T F T F F F F F",
            "B. F F T F F F F F F F",
            "C. T F T T T F T T F T",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "B",
        "explanation": "Tập hợp giao chỉ chứa số 3, do đó bit tại chỉ số 3 bật thành True (T).",
        "image": null
    },
    {
        "id": 79,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Dễ",
        "question": "Độ phức tạp của việc tìm phần tử trong danh sách đặc và danh sách liên kết là:",
        "options": [
            "A. Danh sách đặc lớn hơn",
            "B. Như nhau",
            "C. Danh sách liên kết lớn hơn",
            "D. Không so sánh được"
        ],
        "correctAnswer": "B",
        "explanation": "Cả hai đều dùng tìm kiếm tuần tự (quét từ đầu) nên độ phức tạp là O(n).",
        "image": null
    },
    {
        "id": 80,
        "chapter": "AVL/Bảng băm",
        "difficulty": "Trung bình",
        "question": "(Mã lệnh của hàm isMember trong bảng băm mở). Điền vào (1) và (2): while((1) && (!Found)) if ((2)==X) Found=1; else P=P->Next;",
        "options": [
            "A. (1) là P = NULL và (2) là P->Next->Data",
            "B. (1) là P->Next != NULL và (2) là P->Data",
            "C. (1) là P != NULL và (2) là P->Data",
            "D. Tất cả đều sai"
        ],
        "correctAnswer": "C",
        "explanation": "Con trỏ P phải khác NULL để tiếp tục duyệt, và so sánh X với P->Data.",
        "image": null
    }
];