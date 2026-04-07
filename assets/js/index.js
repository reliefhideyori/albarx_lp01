    const fixedCta = document.querySelector('.fixed-cta');
    const kvSection = document.querySelector('.kv');

    function toggleFixedCta() {
      const kvBottom = kvSection.offsetHeight;
      if (window.scrollY > kvBottom) {
        fixedCta.classList.add('show');
      } else {
        fixedCta.classList.remove('show');
      }
    }

    window.addEventListener('scroll', toggleFixedCta, { passive: true });
    // 初期表示状態をチェック
    toggleFixedCta();

    // 固定CTAクリックでモーダルを開く
    const fixedModal = document.querySelector('.fixed-modal');
    const modalClose = document.querySelector('.fixed-modal__close');

    fixedCta.addEventListener('click', function(e) {
      e.preventDefault();
      fixedModal.classList.add('show');
    });

    // 閉じるボタンクリックでモーダルを閉じる
    modalClose.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      fixedModal.classList.remove('show');
    });

    // モーダル内の×ボタン（p要素）にもイベントを付与
    const modalCloseText = modalClose.querySelector('p');
    if (modalCloseText) {
      modalCloseText.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        fixedModal.classList.remove('show');
      });
    }

    // モーダル外クリックで閉じる
    fixedModal.addEventListener('click', function(e) {
      if (e.target === fixedModal) {
        fixedModal.classList.remove('show');
      }
    });