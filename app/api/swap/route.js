import dbConnect from '@/lib/db';
import Product from '@/model/product_model';
import SwapItem from '@/model/swapItem_model';

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { owner1, product1, owner2, product2, pointDifference } = body;

    if (!owner1 || !product1 || !owner2 || !product2) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const p1 = await Product.findById(product1);
    const p2 = await Product.findById(product2);

    if (!p1 || !p2) {
      return new Response(JSON.stringify({ message: 'One or both products not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const newSwap = await SwapItem.create({
      owner1,
      product1,
      owner2,
      product2,
      pointDifference: pointDifference || 0,
    });

    return new Response(JSON.stringify({ success: true, swap: newSwap }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[SWAP_CREATE_ERROR]', error);
    return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
