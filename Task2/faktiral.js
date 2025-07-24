function faktorial(n) {
    if (n < 0) return undefined; // Faktoriál záporných čísel není definován
    let vysledek = 1;
    for (let i = 2; i <= n; i++) {
      vysledek *= i;
    }
    return vysledek;
  }
  