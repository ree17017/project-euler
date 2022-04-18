public class multiplesofthreeandfive {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		int x = 1;
		int sum = 0;
		int[] multipules = new int[200];
		while (sum < 100) {
			if (x % 3 == 0 || x % 5 == 0) {
				sum = sum + x;
				if()
				multipules[x] = x;
			}
			x = x + 1;
		}

		for (int y : multipules) {
			System.out.print(y);
		}
	}
}
