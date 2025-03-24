import { useEffect } from 'react';
import Link from 'next/link';

import { getCartProducts, getCartTotal } from '@/features/cart/services';
import { type CartProduct } from '@/features/lib/types';

import { lsWrite } from '@/shared/lib/browser';
import { MinusIcon } from '@/shared/ui/icons/outline/minus';
import { PlusIcon } from '@/shared/ui/icons/outline/plus';
import { Button } from '@/shared/ui/kit/button';

import { useCartModalStore } from '../../services/modal.store';
import st from './cart-content.module.scss';

export function CartContent() {
  const { cartProducts, setCartProducts, cartTotal, setCartTotal } =
    useCartModalStore();

  useEffect(() => {
    setCartProducts(getCartProducts());
    setCartTotal(getCartTotal());
  }, []);

  const handleDecreaseQuantity = (product: CartProduct) => {
    const newQuantity = product.quantity - 1;
    if (newQuantity > 0) {
      const updatedCartProducts = cartProducts.map(p =>
        p.title === product.title ? { ...p, quantity: newQuantity } : p,
      );
      lsWrite('cart', updatedCartProducts);
      setCartProducts(updatedCartProducts);
      setCartTotal(getCartTotal());
    }
  };

  const handleIncreaseQuantity = (product: CartProduct) => {
    const updatedCartProducts = cartProducts.map(p =>
      p.title === product.title ? { ...p, quantity: p.quantity + 1 } : p,
    );
    lsWrite('cart', updatedCartProducts);
    setCartProducts(updatedCartProducts);
    setCartTotal(getCartTotal());
  };

  const handleRemoveProduct = (product: CartProduct) => {
    const updatedCartProducts = cartProducts.filter(
      p => p.title !== product.title,
    );
    lsWrite('cart', updatedCartProducts);
    setCartProducts(updatedCartProducts);
    setCartTotal(getCartTotal());
  };

  return (
    <>
      <div className={st.cartContent}>
        <div className={st.cartTable}>
          <div className={st.tableHead}>
            <div className={st.tableHeadItem}>Service Name</div>
            <div className={st.tableHeadItem}>Price</div>
            <div className={st.tableHeadItem}>Quantity</div>
            <div className={st.tableHeadItem}>Subtotal</div>
          </div>
          <div className={st.tableBody}>
            {cartProducts.map((product, index) => (
              <div key={index} className={st.tableRow}>
                <div className={st.tableRowItem}>
                  <div className={st.tableRowItemTitle}>{product.title}</div>
                </div>
                <div className={st.tableRowItem}>€{product.price}</div>
                <div className={st.tableRowItem}>
                  <div className={st.tableRowItemQuantity}>
                    <button onClick={() => handleDecreaseQuantity(product)}>
                      <MinusIcon />
                    </button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(product)}>
                      <PlusIcon />
                    </button>
                  </div>
                </div>
                <div className={st.tableRowItem}>
                  €{product.price * product.quantity}
                </div>
                <button
                  className={st.tableRowItemRemove}
                  onClick={() => handleRemoveProduct(product)}
                >
                  <MinusIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={st.cartContentMobile}>
        {cartProducts.map((product, index) => (
          <div key={index} className={st.cartContentMobileItem}>
            <div className={st.cartContentMobileItemTitle}>{product.title}</div>
            <button
              className={st.tableRowItemRemove}
              onClick={() => handleRemoveProduct(product)}
            >
              <MinusIcon />
            </button>
            <div className={st.cartTable}>
              <div className={st.tableHead}>
                <div className={st.tableHeadItem}>Price</div>
                <div className={st.tableHeadItem}>Quantity</div>
                <div className={st.tableHeadItem}>Subtotal</div>
              </div>
              <div className={st.tableBody}>
                <div className={st.tableRow}>
                  <div className={st.tableRowItem}>€{product.price}</div>
                  <div className={st.tableRowItem}>
                    <div className={st.tableRowItemQuantity}>
                      <button onClick={() => handleDecreaseQuantity(product)}>
                        <MinusIcon />
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(product)}>
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                  <div className={st.tableRowItem}>
                    €{product.price * product.quantity}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={st.cartTotal}>Total: €{cartTotal}</div>
      <div className={st.cartButtons}>
        <Link href="/checkout">
          <Button size="sm" variant="black">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </>
  );
}
