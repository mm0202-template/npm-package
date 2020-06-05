import Sample from "./Sample";

describe("サンプル", () => {
    test('サンプルテスト', () => {
        const sample = new Sample();
        expect(sample.get()).toBe('success!!')
    });
});
