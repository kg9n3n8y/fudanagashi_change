const fudalist = [
    { no:   1, kimariji: "あきの", normal: "./torifuda/tori_1.png", reverse: "./torifuda/tori_r_1.png"},
    { no:   2, kimariji: "はるす", normal: "./torifuda/tori_2.png", reverse: "./torifuda/tori_r_2.png"},
    { no:   3, kimariji: "あし", normal: "./torifuda/tori_3.png", reverse: "./torifuda/tori_r_3.png"},
    { no:   4, kimariji: "たご", normal: "./torifuda/tori_4.png", reverse: "./torifuda/tori_r_4.png"},
    { no:   5, kimariji: "おく", normal: "./torifuda/tori_5.png", reverse: "./torifuda/tori_r_5.png"},
    { no:   6, kimariji: "かさ", normal: "./torifuda/tori_6.png", reverse: "./torifuda/tori_r_6.png"},
    { no:   7, kimariji: "あまの", normal: "./torifuda/tori_7.png", reverse: "./torifuda/tori_r_7.png"},
    { no:   8, kimariji: "わがい", normal: "./torifuda/tori_8.png", reverse: "./torifuda/tori_r_8.png"},
    { no:   9, kimariji: "はなの", normal: "./torifuda/tori_9.png", reverse: "./torifuda/tori_r_9.png"},
    { no:   10, kimariji: "これ", normal: "./torifuda/tori_10.png", reverse: "./torifuda/tori_r_10.png"},
    { no:   11, kimariji: "わたのはらや", normal: "./torifuda/tori_11.png", reverse: "./torifuda/tori_r_11.png"},
    { no:   12, kimariji: "あまつ", normal: "./torifuda/tori_12.png", reverse: "./torifuda/tori_r_12.png"},
    { no:   13, kimariji: "つく", normal: "./torifuda/tori_13.png", reverse: "./torifuda/tori_r_13.png"},
    { no:   14, kimariji: "みち", normal: "./torifuda/tori_14.png", reverse: "./torifuda/tori_r_14.png"},
    { no:   15, kimariji: "きみがためは", normal: "./torifuda/tori_15.png", reverse: "./torifuda/tori_r_15.png"},
    { no:   16, kimariji: "たち", normal: "./torifuda/tori_16.png", reverse: "./torifuda/tori_r_16.png"},
    { no:   17, kimariji: "ちは", normal: "./torifuda/tori_17.png", reverse: "./torifuda/tori_r_17.png"},
    { no:   18, kimariji: "す", normal: "./torifuda/tori_18.png", reverse: "./torifuda/tori_r_18.png"},
    { no:   19, kimariji: "なにわが", normal: "./torifuda/tori_19.png", reverse: "./torifuda/tori_r_19.png"},
    { no:   20, kimariji: "わび", normal: "./torifuda/tori_20.png", reverse: "./torifuda/tori_r_20.png"},
    { no:   21, kimariji: "いまこ", normal: "./torifuda/tori_21.png", reverse: "./torifuda/tori_r_21.png"},
    { no:   22, kimariji: "ふ", normal: "./torifuda/tori_22.png", reverse: "./torifuda/tori_r_22.png"},
    { no:   23, kimariji: "つき", normal: "./torifuda/tori_23.png", reverse: "./torifuda/tori_r_23.png"},
    { no:   24, kimariji: "この", normal: "./torifuda/tori_24.png", reverse: "./torifuda/tori_r_24.png"},
    { no:   25, kimariji: "なにし", normal: "./torifuda/tori_25.png", reverse: "./torifuda/tori_r_25.png"},
    { no:   26, kimariji: "おぐ", normal: "./torifuda/tori_26.png", reverse: "./torifuda/tori_r_26.png"},
    { no:   27, kimariji: "みかの", normal: "./torifuda/tori_27.png", reverse: "./torifuda/tori_r_27.png"},
    { no:   28, kimariji: "やまざ", normal: "./torifuda/tori_28.png", reverse: "./torifuda/tori_r_28.png"},
    { no:   29, kimariji: "こころあ", normal: "./torifuda/tori_29.png", reverse: "./torifuda/tori_r_29.png"},
    { no:   30, kimariji: "ありあ", normal: "./torifuda/tori_30.png", reverse: "./torifuda/tori_r_30.png"},
    { no:   31, kimariji: "あさぼらけあ", normal: "./torifuda/tori_31.png", reverse: "./torifuda/tori_r_31.png"},
    { no:   32, kimariji: "やまが", normal: "./torifuda/tori_32.png", reverse: "./torifuda/tori_r_32.png"},
    { no:   33, kimariji: "ひさ", normal: "./torifuda/tori_33.png", reverse: "./torifuda/tori_r_33.png"},
    { no:   34, kimariji: "たれ", normal: "./torifuda/tori_34.png", reverse: "./torifuda/tori_r_34.png"},
    { no:   35, kimariji: "ひとは", normal: "./torifuda/tori_35.png", reverse: "./torifuda/tori_r_35.png"},
    { no:   36, kimariji: "なつ", normal: "./torifuda/tori_36.png", reverse: "./torifuda/tori_r_36.png"},
    { no:   37, kimariji: "しら", normal: "./torifuda/tori_37.png", reverse: "./torifuda/tori_r_37.png"},
    { no:   38, kimariji: "わすら", normal: "./torifuda/tori_38.png", reverse: "./torifuda/tori_r_38.png"},
    { no:   39, kimariji: "あさじ", normal: "./torifuda/tori_39.png", reverse: "./torifuda/tori_r_39.png"},
    { no:   40, kimariji: "しの", normal: "./torifuda/tori_40.png", reverse: "./torifuda/tori_r_40.png"},
    { no:   41, kimariji: "こい", normal: "./torifuda/tori_41.png", reverse: "./torifuda/tori_r_41.png"},
    { no:   42, kimariji: "ちぎりき", normal: "./torifuda/tori_42.png", reverse: "./torifuda/tori_r_42.png"},
    { no:   43, kimariji: "あい", normal: "./torifuda/tori_43.png", reverse: "./torifuda/tori_r_43.png"},
    { no:   44, kimariji: "おおこ", normal: "./torifuda/tori_44.png", reverse: "./torifuda/tori_r_44.png"},
    { no:   45, kimariji: "あわれ", normal: "./torifuda/tori_45.png", reverse: "./torifuda/tori_r_45.png"},
    { no:   46, kimariji: "ゆら", normal: "./torifuda/tori_46.png", reverse: "./torifuda/tori_r_46.png"},
    { no:   47, kimariji: "やえ", normal: "./torifuda/tori_47.png", reverse: "./torifuda/tori_r_47.png"},
    { no:   48, kimariji: "かぜを", normal: "./torifuda/tori_48.png", reverse: "./torifuda/tori_r_48.png"},
    { no:   49, kimariji: "みかき", normal: "./torifuda/tori_49.png", reverse: "./torifuda/tori_r_49.png"},
    { no:   50, kimariji: "きみがためお", normal: "./torifuda/tori_50.png", reverse: "./torifuda/tori_r_50.png"},
    { no:   51, kimariji: "かく", normal: "./torifuda/tori_51.png", reverse: "./torifuda/tori_r_51.png"},
    { no:   52, kimariji: "あけ", normal: "./torifuda/tori_52.png", reverse: "./torifuda/tori_r_52.png"},
    { no:   53, kimariji: "なげき", normal: "./torifuda/tori_53.png", reverse: "./torifuda/tori_r_53.png"},
    { no:   54, kimariji: "わすれ", normal: "./torifuda/tori_54.png", reverse: "./torifuda/tori_r_54.png"},
    { no:   55, kimariji: "たき", normal: "./torifuda/tori_55.png", reverse: "./torifuda/tori_r_55.png"},
    { no:   56, kimariji: "あらざ", normal: "./torifuda/tori_56.png", reverse: "./torifuda/tori_r_56.png"},
    { no:   57, kimariji: "め", normal: "./torifuda/tori_57.png", reverse: "./torifuda/tori_r_57.png"},
    { no:   58, kimariji: "ありま", normal: "./torifuda/tori_58.png", reverse: "./torifuda/tori_r_58.png"},
    { no:   59, kimariji: "やす", normal: "./torifuda/tori_59.png", reverse: "./torifuda/tori_r_59.png"},
    { no:   60, kimariji: "おおえ", normal: "./torifuda/tori_60.png", reverse: "./torifuda/tori_r_60.png"},
    { no:   61, kimariji: "いに", normal: "./torifuda/tori_61.png", reverse: "./torifuda/tori_r_61.png"},
    { no:   62, kimariji: "よを", normal: "./torifuda/tori_62.png", reverse: "./torifuda/tori_r_62.png"},
    { no:   63, kimariji: "いまは", normal: "./torifuda/tori_63.png", reverse: "./torifuda/tori_r_63.png"},
    { no:   64, kimariji: "あさぼらけう", normal: "./torifuda/tori_64.png", reverse: "./torifuda/tori_r_64.png"},
    { no:   65, kimariji: "うら", normal: "./torifuda/tori_65.png", reverse: "./torifuda/tori_r_65.png"},
    { no:   66, kimariji: "もろ", normal: "./torifuda/tori_66.png", reverse: "./torifuda/tori_r_66.png"},
    { no:   67, kimariji: "はるの", normal: "./torifuda/tori_67.png", reverse: "./torifuda/tori_r_67.png"},
    { no:   68, kimariji: "こころに", normal: "./torifuda/tori_68.png", reverse: "./torifuda/tori_r_68.png"},
    { no:   69, kimariji: "あらし", normal: "./torifuda/tori_69.png", reverse: "./torifuda/tori_r_69.png"},
    { no:   70, kimariji: "さ", normal: "./torifuda/tori_70.png", reverse: "./torifuda/tori_r_70.png"},
    { no:   71, kimariji: "ゆう", normal: "./torifuda/tori_71.png", reverse: "./torifuda/tori_r_71.png"},
    { no:   72, kimariji: "おと", normal: "./torifuda/tori_72.png", reverse: "./torifuda/tori_r_72.png"},
    { no:   73, kimariji: "たか", normal: "./torifuda/tori_73.png", reverse: "./torifuda/tori_r_73.png"},
    { no:   74, kimariji: "うか", normal: "./torifuda/tori_74.png", reverse: "./torifuda/tori_r_74.png"},
    { no:   75, kimariji: "ちぎりお", normal: "./torifuda/tori_75.png", reverse: "./torifuda/tori_r_75.png"},
    { no:   76, kimariji: "わたのはらこ", normal: "./torifuda/tori_76.png", reverse: "./torifuda/tori_r_76.png"},
    { no:   77, kimariji: "せ", normal: "./torifuda/tori_77.png", reverse: "./torifuda/tori_r_77.png"},
    { no:   78, kimariji: "あわじ", normal: "./torifuda/tori_78.png", reverse: "./torifuda/tori_r_78.png"},
    { no:   79, kimariji: "あきか", normal: "./torifuda/tori_79.png", reverse: "./torifuda/tori_r_79.png"},
    { no:   80, kimariji: "ながか", normal: "./torifuda/tori_80.png", reverse: "./torifuda/tori_r_80.png"},
    { no:   81, kimariji: "ほ", normal: "./torifuda/tori_81.png", reverse: "./torifuda/tori_r_81.png"},
    { no:   82, kimariji: "おも", normal: "./torifuda/tori_82.png", reverse: "./torifuda/tori_r_82.png"},
    { no:   83, kimariji: "よのなかよ", normal: "./torifuda/tori_83.png", reverse: "./torifuda/tori_r_83.png"},
    { no:   84, kimariji: "ながら", normal: "./torifuda/tori_84.png", reverse: "./torifuda/tori_r_84.png"},
    { no:   85, kimariji: "よも", normal: "./torifuda/tori_85.png", reverse: "./torifuda/tori_r_85.png"},
    { no:   86, kimariji: "なげけ", normal: "./torifuda/tori_86.png", reverse: "./torifuda/tori_r_86.png"},
    { no:   87, kimariji: "む", normal: "./torifuda/tori_87.png", reverse: "./torifuda/tori_r_87.png"},
    { no:   88, kimariji: "なにわえ", normal: "./torifuda/tori_88.png", reverse: "./torifuda/tori_r_88.png"},
    { no:   89, kimariji: "たま", normal: "./torifuda/tori_89.png", reverse: "./torifuda/tori_r_89.png"},
    { no:   90, kimariji: "みせ", normal: "./torifuda/tori_90.png", reverse: "./torifuda/tori_r_90.png"},
    { no:   91, kimariji: "きり", normal: "./torifuda/tori_91.png", reverse: "./torifuda/tori_r_91.png"},
    { no:   92, kimariji: "わがそ", normal: "./torifuda/tori_92.png", reverse: "./torifuda/tori_r_92.png"},
    { no:   93, kimariji: "よのなかは", normal: "./torifuda/tori_93.png", reverse: "./torifuda/tori_r_93.png"},
    { no:   94, kimariji: "みよ", normal: "./torifuda/tori_94.png", reverse: "./torifuda/tori_r_94.png"},
    { no:   95, kimariji: "おおけ", normal: "./torifuda/tori_95.png", reverse: "./torifuda/tori_r_95.png"},
    { no:   96, kimariji: "はなさ", normal: "./torifuda/tori_96.png", reverse: "./torifuda/tori_r_96.png"},
    { no:   97, kimariji: "こぬ", normal: "./torifuda/tori_97.png", reverse: "./torifuda/tori_r_97.png"},
    { no:   98, kimariji: "かぜそ", normal: "./torifuda/tori_98.png", reverse: "./torifuda/tori_r_98.png"},
    { no:   99, kimariji: "ひとも", normal: "./torifuda/tori_99.png", reverse: "./torifuda/tori_r_99.png"},
    { no:   100, kimariji: "もも", normal: "./torifuda/tori_100.png", reverse: "./torifuda/tori_r_100.png"}
]