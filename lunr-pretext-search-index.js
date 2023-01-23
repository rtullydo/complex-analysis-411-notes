var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-1",
  "level": "1",
  "url": "frontmatter-1.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Ryan Tully-Doyle  Cal Poly, SLO     "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Conformal maps",
  "body": " Conformal maps  Certain functions behave like little rigid rotations locally. A function is called conformal if for each , rotates tangent vectors to curves passing through by a fixed angle and stretches tangent vectors to curves by a fixed factor .   By way of example, consider the function at the point . The horizontal line through can be parametrized by which passes through at . The tangent vector at is . Now look at the image. Composing, we get Then calculating the tangent vector to the image gives That is, the tangent vector has increased in length by a factor of and undergone a rotation of radians. If we check the vertical line through , which can be parametrized by where , we find that the tangent vector has image , which again represents an increase in magnitude of and a rotation of radians.  There is a close connection between analytic maps and conformal maps.   Let be analytic and let for all . Then is conformal. .  This is pretty straighforward to see via the chain rule. Let be a (differentiable) path contained in with . Let be the image of under defined by . Then the chain rule gives which in turn gives That is, if the image of the derivative of any curve through is rotated by and stretched by .  Note that the condition that is necessary. For one, it obviously covers up the relationship between a curve and its image in the relation above. But the problem is deeper. Consider the function . Consider the lines that run along the and axis. These lines cross at a right angle at , but since both lines are mapped to the real axis under , their images intersect at an angle of radians. For this reason, points at which are called singular and do not correspond to points of local conformality.  Much of the behavior of analytic functions should be thought about in small neighborhoods around points. The next theorem is one that you learn in first year calculus and describes the relationship between the derivative of a function and the derivative of its inverse (when that inverse exists). Analytic functions away from singular points are locally invertible .  Inverse function theorem  Let be analytic and for . Then there exists a neighborhood of and a neighborhood of so that  the restriction is a bijection,  is analytic,  and where .     The inverse function theorem will let us make more connections between conformal maps and their inverses.   If a map is conformal and bijective, then is conformal and bijective.    Because is bijective, exists. Because is conformal, for any , we must have . Then the inverse function theorem gives that is analytic and and so is also conformal.    If is conformal and bijective and is conformal and bijective, then is conformal and bijective.    This is an immediate consequence of the chain rule.   Because conformality is preserved by inverses and composition, we have the structure necessary to impose ideas from algebra on the family of conformal maps if we can make the functions compatible. An automorphism is a bijection from a set onto itself.   The set of bijective conformal maps from a domain to itself (that is, the set of conformal automorphisms of ) is a group, where the group operation is composition of functions.   As part of our study of conformal maps, we're going to be looking a special family of automorphisms defined on the unit disk , but that's for later!  A typical use of bijective conformal maps is to change problems in one domain to problems in a different domain. It might not be obvious why, but frequently we can use tools in one domain that might not be available in another. Because bijective conformal maps preserve information about paths, solving a problem in one domain can be easily extended to a solution in a conformal relative.   Two domains are called conformally equivalent if there is a bijective conformal map .    Let be a simply connected domain that isn't all of . Then there exists a bijective conformal map . Futher, for any fixed , we can find so that and . With these conditions, the map is unique.   There is a pretty easy but very striking corollary.   Any two simply connected domains, neither of which is all of , are conformally equivalent.   Of course there are some annoyances here: we have no clue how to actually find the maps! We also don't know what happens at the boundary of the domains in the general case. Our next steps will be to address these questions.  "
},
{
  "id": "p-1",
  "level": "2",
  "url": "section-1.html#p-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conformal "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "section-1.html#theorem-1",
  "type": "Theorem",
  "number": "1.1.2",
  "title": "",
  "body": " Let be analytic and let for all . Then is conformal. . "
},
{
  "id": "p-6",
  "level": "2",
  "url": "section-1.html#p-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "section-1.html#theorem-2",
  "type": "Theorem",
  "number": "1.1.3",
  "title": "Inverse function theorem.",
  "body": "Inverse function theorem  Let be analytic and for . Then there exists a neighborhood of and a neighborhood of so that  the restriction is a bijection,  is analytic,  and where .    "
},
{
  "id": "proposition-1",
  "level": "2",
  "url": "section-1.html#proposition-1",
  "type": "Proposition",
  "number": "1.1.4",
  "title": "",
  "body": " If a map is conformal and bijective, then is conformal and bijective.  "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "section-1.html#proof-1",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " Because is bijective, exists. Because is conformal, for any , we must have . Then the inverse function theorem gives that is analytic and and so is also conformal.  "
},
{
  "id": "proposition-2",
  "level": "2",
  "url": "section-1.html#proposition-2",
  "type": "Proposition",
  "number": "1.1.5",
  "title": "",
  "body": " If is conformal and bijective and is conformal and bijective, then is conformal and bijective.  "
},
{
  "id": "proof-2",
  "level": "2",
  "url": "section-1.html#proof-2",
  "type": "Proof",
  "number": "1.1.2",
  "title": "",
  "body": " This is an immediate consequence of the chain rule.  "
},
{
  "id": "p-14",
  "level": "2",
  "url": "section-1.html#p-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "automorphism "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "section-1.html#theorem-3",
  "type": "Theorem",
  "number": "1.1.6",
  "title": "",
  "body": " The set of bijective conformal maps from a domain to itself (that is, the set of conformal automorphisms of ) is a group, where the group operation is composition of functions.  "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "section-1.html#definition-2",
  "type": "Definition",
  "number": "1.1.7",
  "title": "",
  "body": " Two domains are called conformally equivalent if there is a bijective conformal map .  "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "section-1.html#theorem-4",
  "type": "Theorem",
  "number": "1.1.8",
  "title": "",
  "body": " Let be a simply connected domain that isn't all of . Then there exists a bijective conformal map . Futher, for any fixed , we can find so that and . With these conditions, the map is unique.  "
},
{
  "id": "corollary-1",
  "level": "2",
  "url": "section-1.html#corollary-1",
  "type": "Corollary",
  "number": "1.1.9",
  "title": "",
  "body": " Any two simply connected domains, neither of which is all of , are conformally equivalent.  "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Simply connected sets, boundaries, and the Riemann mapping theorem",
  "body": " Simply connected sets, boundaries, and the Riemann mapping theorem  Before we go on, we're going to need to deal with the issue that analytic maps don't always act nicely on the boundaries of their domains. (Remember, analytic and holomorphic are local properties defined on open sets, and the edge of a set isn't open.) Let us recall that a set is called simply connected if it has no holes in it . This intuitive idea of no holes corresponds to the rigorous notion a simply connected set is one in which every simple closed curve can be continuously deformed into a point without leaving the set. The act of continuously deforming a curve within a set is called homotopy . Two curves are said to be homotopic if we can find a homotopy from one curve to the other. More precisely, a homotopy in a domain from a curve to a a curve is a continuous function where for all , and the endpoints have , and .  Two domains are said to be conformally equivalent if there exists a bijective conformal map . The next theorem characterizes which sets are conformally equivalent to simply connected sets.   Riemann Mapping Theorem  Let be a simply connected domain in with . Then there exists a bijective conformal map , where is the complex unit disk. For any fixed , we can find a unique such so that and .   Because the maps in the theorem above are bijections, we get a striking immediate corollary.   Any two simply connected regions, neither one of which is all of , are conformally equivalent.   This is a powerful fact! Unfortunately, this theorem doesn't tell us how to fund the conformal maps that connect different sets. We'll take a deeper dive into that in the next couple of lectures.  Now, we'll turn to the question of what happens to the boundaries of domains under conformal maps. One way to think of the boundary of a domain in is the set of points that can be reached as limits of sequences in . Another is to think of it as the set of points for which any neighborhood contains points in and points outside of . We use the notation to indicated the boundary of . Because domains in are open, a set and its boundary are disjoint. The closure of a domain is and will be denoted (we can also use , but to avoid confusion with the complex conjugate, we'll avoid that in these notes).   Let be domains in with boundaries . Suppose that is conformal (that is, is conformal from its domain to its range). If has boundary and additionally for some , then .   Essentially, the previous proposition implies that we can find the image of a conformal map by computing the image of the boundary and keeping track of where the interior of the domain was mapped via a single point.  We now come to the question of when a conformal map between domains can be extended to the boundary. Note that this extension will be a continuous extension, not an analytic one, because we can't work on neighborhoods for points in the boundary. For nice sets, conformal maps do indeed extend to the boundary.   Suppose that are bounded, simply connected regions with boundaries and that are simple, continuous, closed curves (these are sometimes called Jordan curves). Then any conformal map of that is one-to-one onto can be extended to a continuous map of one-to-one onto .    Find a bijective conformal map that takes a bounded region to an unbounded region. Show that there is no bijective conformal map from a simply connected domain to a non-simply connected domain.   "
},
{
  "id": "p-23",
  "level": "2",
  "url": "section-2.html#p-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simply connected homotopy homotopic "
},
{
  "id": "p-24",
  "level": "2",
  "url": "section-2.html#p-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conformally equivalent "
},
{
  "id": "theorem-5",
  "level": "2",
  "url": "section-2.html#theorem-5",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "Riemann Mapping Theorem.",
  "body": " Riemann Mapping Theorem  Let be a simply connected domain in with . Then there exists a bijective conformal map , where is the complex unit disk. For any fixed , we can find a unique such so that and .  "
},
{
  "id": "corollary-2",
  "level": "2",
  "url": "section-2.html#corollary-2",
  "type": "Corollary",
  "number": "1.2.2",
  "title": "",
  "body": " Any two simply connected regions, neither one of which is all of , are conformally equivalent.  "
},
{
  "id": "p-29",
  "level": "2",
  "url": "section-2.html#p-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closure "
},
{
  "id": "proposition-3",
  "level": "2",
  "url": "section-2.html#proposition-3",
  "type": "Proposition",
  "number": "1.2.3",
  "title": "",
  "body": " Let be domains in with boundaries . Suppose that is conformal (that is, is conformal from its domain to its range). If has boundary and additionally for some , then .  "
},
{
  "id": "theorem-6",
  "level": "2",
  "url": "section-2.html#theorem-6",
  "type": "Theorem",
  "number": "1.2.4",
  "title": "",
  "body": " Suppose that are bounded, simply connected regions with boundaries and that are simple, continuous, closed curves (these are sometimes called Jordan curves). Then any conformal map of that is one-to-one onto can be extended to a continuous map of one-to-one onto .  "
},
{
  "id": "question-1",
  "level": "2",
  "url": "section-2.html#question-1",
  "type": "Question",
  "number": "1.2.5",
  "title": "",
  "body": " Find a bijective conformal map that takes a bounded region to an unbounded region. Show that there is no bijective conformal map from a simply connected domain to a non-simply connected domain.  "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "1.3",
  "title": "(optional) A proof of the Riemann Mapping Theorem",
  "body": " (optional) A proof of the Riemann Mapping Theorem  The Riemann Mapping Theorem asserts that a simply connected domain is conformally equilvalent to the complex unit disk . To prove this is going to take a bit of work, so roll up your sleeves! We'll proceed in pieces.  A sequence of functions is said to be locally uniformly bounded on a domain if, for any , there exists a neighborhood of and a constant so that on for all . Equivalently, a sequence of functions is locally uniformly bounded if the family of functions is uniformly bounded on each compact subset of the domain.  Stieljes-Osgood Theorem  A locally uniformly bounded sequences of holomorphic functions on a domain , has a locally uniformly convergent subsequence.    Let be the domain of the sequence of locally uniformly bounded functions .  It is enough to show that for each closed disk in that the sequence converges uniformly on . Suppose we could do so. Then we could take a countable cover of by open disks whose closures (say by using points with rational real and imaginary parts as centers), which can be arranged into a sequence . Then by supposition, the sequence has a subsequence converging uniformly on . Applying the same argument to on gives a subsequence converging uniformly on (and ). Proceed inductively. The sequence will be a subsequence of every previous subsequence, including . Now take the sequence of elements . It is a subsequence of and it is locally uniformly convergent in . (This is a form of a diagonal argument, ala Cantor.)  We can reduce the problem even further. Consider one of the disks, say . Because is a subset of then open set , it is contained in an open disk also contained in and with on which is uniformly bounded.   "
},
{
  "id": "p-36",
  "level": "2",
  "url": "section-3.html#p-36",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "locally uniformly bounded "
},
{
  "id": "theorem-7",
  "level": "2",
  "url": "section-3.html#theorem-7",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "Stieljes-Osgood Theorem.",
  "body": "Stieljes-Osgood Theorem  A locally uniformly bounded sequences of holomorphic functions on a domain , has a locally uniformly convergent subsequence.  "
},
{
  "id": "proof-3",
  "level": "2",
  "url": "section-3.html#proof-3",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": " Let be the domain of the sequence of locally uniformly bounded functions .  It is enough to show that for each closed disk in that the sequence converges uniformly on . Suppose we could do so. Then we could take a countable cover of by open disks whose closures (say by using points with rational real and imaginary parts as centers), which can be arranged into a sequence . Then by supposition, the sequence has a subsequence converging uniformly on . Applying the same argument to on gives a subsequence converging uniformly on (and ). Proceed inductively. The sequence will be a subsequence of every previous subsequence, including . Now take the sequence of elements . It is a subsequence of and it is locally uniformly convergent in . (This is a form of a diagonal argument, ala Cantor.)  We can reduce the problem even further. Consider one of the disks, say . Because is a subset of then open set , it is contained in an open disk also contained in and with on which is uniformly bounded.  "
},
{
  "id": "section-4",
  "level": "1",
  "url": "section-4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Interlude: Liouville's Theorem",
  "body": " Interlude: Liouville's Theorem  In the calculus of real functions, it isn't at all unusual to deal with power series that converge everywhere in that represent bounded functions. (A whole class of these in the real world are signals that can be expressed as Fourier series). For example, has a power series representation valid for all real and it bounded in absolute value by 1. The extension theorem tells us that this same series should have infinite radius of convergence on as well, but we should note what happens to the size of the values of the function. Let . Then and which will be unbounded as we let . So even though remains a function with a convergent power series representation on (a so-called entire function), it is an unbounded function. Liouville's theorem asserts that this is the general situation - an entire function that is bounded must necessarily be a constant function.  The proof of Liouville's theorem follows from a useful set of estimates about the behavior of derivatives of bounded analytic functions called the Cauchy inequalities. First, recall that Cauchy's integral theorem for derivatives gives where is a simple closed curve about inside the domain of .   Cauchy inequalities  Let be an analytic function on a domain with bound on , and let be a circle of radius centered at a point with . Then    Suppose that parametrizes . Note that restricted to , we have . By the integral theorem for derivatives, we have where the inequality follows from the ML-inequality.   We're now ready for the main result of this section   Liouville's Theorem  A bounded entire function is necessarily constant.    Let be a complex number and let be a circle of radius centered at . Suppose that is bounded in modulus on by a constant . Now apply the Cauchy inequality with to at . This gives This inequality holds for all radii , because every circle centered at is contained in the domain of . In particular, this means that as we let , we have which means that . Since this holds for every , we have and so for some constant .   "
},
{
  "id": "p-41",
  "level": "2",
  "url": "section-4.html#p-41",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "entire "
},
{
  "id": "theorem-8",
  "level": "2",
  "url": "section-4.html#theorem-8",
  "type": "Theorem",
  "number": "1.4.1",
  "title": "Cauchy inequalities.",
  "body": " Cauchy inequalities  Let be an analytic function on a domain with bound on , and let be a circle of radius centered at a point with . Then  "
},
{
  "id": "proof-4",
  "level": "2",
  "url": "section-4.html#proof-4",
  "type": "Proof",
  "number": "1.4.1",
  "title": "",
  "body": " Suppose that parametrizes . Note that restricted to , we have . By the integral theorem for derivatives, we have where the inequality follows from the ML-inequality.  "
},
{
  "id": "theorem-9",
  "level": "2",
  "url": "section-4.html#theorem-9",
  "type": "Theorem",
  "number": "1.4.2",
  "title": "Liouville's Theorem.",
  "body": " Liouville's Theorem  A bounded entire function is necessarily constant.  "
},
{
  "id": "proof-5",
  "level": "2",
  "url": "section-4.html#proof-5",
  "type": "Proof",
  "number": "1.4.2",
  "title": "",
  "body": " Let be a complex number and let be a circle of radius centered at . Suppose that is bounded in modulus on by a constant . Now apply the Cauchy inequality with to at . This gives This inequality holds for all radii , because every circle centered at is contained in the domain of . In particular, this means that as we let , we have which means that . Since this holds for every , we have and so for some constant .  "
},
{
  "id": "section-5",
  "level": "1",
  "url": "section-5.html",
  "type": "Section",
  "number": "1.5",
  "title": "Exercise set 1",
  "body": " Exercise set 1   Let be the square with corners . Find the image of the square under the map . Where does the interior of the square map? Is the image a square?  Let be the unit square in . Find the image of the square under the map . Make sure to indicate where the interior maps.  Find the image of the first quadrant under the map .  Let . Plot the set . Find the image of the set under the map .  Near which points are the following functions conformal?   ;     .    Let be constant. Show that defined by can be written as a rotation followed by a magnification followed by a translation.  The Riemann mapping theorem concerns simply connected sets that are not all of . Is there a conformal map from that is one-to-one onto the unit disk ? Is there a conformal map of one-to-one onto ?   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-5.html#exercise-1",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "Let be the square with corners . Find the image of the square under the map . Where does the interior of the square map? Is the image a square? "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-5.html#exercise-2",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "Let be the unit square in . Find the image of the square under the map . Make sure to indicate where the interior maps. "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-5.html#exercise-3",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "Find the image of the first quadrant under the map . "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-5.html#exercise-4",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "Let . Plot the set . Find the image of the set under the map . "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-5.html#exercise-5",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": "Near which points are the following functions conformal?   ;     .   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-5.html#exercise-6",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": "Let be constant. Show that defined by can be written as a rotation followed by a magnification followed by a translation. "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-5.html#exercise-7",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "",
  "body": "The Riemann mapping theorem concerns simply connected sets that are not all of . Is there a conformal map from that is one-to-one onto the unit disk ? Is there a conformal map of one-to-one onto ? "
},
{
  "id": "section-6",
  "level": "1",
  "url": "section-6.html",
  "type": "Section",
  "number": "1.6",
  "title": "Linear fractional tranformations",
  "body": " Linear fractional tranformations  A couple of you have asked me how to actually find the conformal maps that are guaranteed to exist by the Riemann Mapping Theorem. For a large class of domains, we can readily (for some value of readily) find these!   A linear fractional transformation is a degree one complex rational function of the form for fixed constants , and where we assume that .    What happens to if ?   We will use the shorthand LFT to stand for linear fractional transformation. From what we learned last term, it should be immediately obvious that an LFT has one pole of order 1 where .  LFTs are the basic building blocks of conformal maps.   Let Then is bijective and conformal from to .  The inverse function is also a linear fractional tranformation with formula    Let . The domain excludes the simple pole of , and likewise for and , which means that are analytic on respectively. So the argument comes down to showing that these functions are inverses, which can be done by direct computation. We will need the fact that on and that by definition. We leave to the reader the computation that and . Finally, which implies that   We leave a little hook for the future here - we can complete the function by assigning the value , which will turn out, which a little caution, to give us a conformal bijection of the Riemann sphere to itself. We'll arrive at the Riemann sphere in the next section.  What sort of functions are in the class of LFTs? If , we get the translation function . If and , then we get , which should be viewed as which is a rotation by and a magnification by . Finally, if and , we get the inversion function .  We noted that the conformal automorphisms of the unit disk form a group - let us characterize these functions.   A conformal automorphism of the unit disk is a linear fractional transformation of the form for a fixed angle and a fixed . Moreover, any of this form is a conformal automorphism of .    We'll start by showing that maps of the form of map the unit circle into itself. First, assume that . Then Because , we also have that , which gives Hence, . Now, note that has only a singularity at , which is outside the unit circle, so is analytic in a neighborhood of . Then by the maximium modulus principle, for any , we must have , which implies that . Also, by , has the same form, and so also defines a conformal map from . Thus any such is a conformal automorphism from .  Now, let's show that any conformal automorphism from must be of this form. We'll be using uniqueness of conformal maps. Assume that is a conformal automorphism. Let , and let . A map of the form also has . Further, if we compute the derivative of at , we'll get , which has argument . Thus, and agree in value and argument at , and so by uniquess of conformal maps, . (note: the argument version of uniqueness follows from the positive derivative version. add this to a future draft or add as exercise.)   Let denote the extended complex plane. If we think of lines as passing through the unique point at in either direction, then lines are essentially circles in . Equivalently, lines map to great circles passing through the north pole in the Riemann sphere model. Linear fractional transforms on send circles to circles with this identification for lines.   Let be a linear fractional transformation. If is a line and is a circle, then is a line or a circle, and is a line or a circle.   Some authors use the amusingly awful word clircle to include both cases. We'll be more dignified and just say circle when we're referring to these shapes in the extended plane or sphere.  Now suppose that we are given three points in . If these are collinear, the three points determine a unique line. If they are not collinear, they determine a unique circle. Because LFTs take circles\/lines to circles lines, we might suspect that the implication of the geometric fact above is that there is a unique linear fractional map carrying any set to the set , and this is indeed the case.   Given two sets of distinct points and , there is a unique LFT with for . Moreover, if then   "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "section-6.html#definition-3",
  "type": "Definition",
  "number": "1.6.1",
  "title": "",
  "body": " A linear fractional transformation is a degree one complex rational function of the form for fixed constants , and where we assume that .  "
},
{
  "id": "question-2",
  "level": "2",
  "url": "section-6.html#question-2",
  "type": "Question",
  "number": "1.6.2",
  "title": "",
  "body": " What happens to if ?  "
},
{
  "id": "prop-lft",
  "level": "2",
  "url": "section-6.html#prop-lft",
  "type": "Proposition",
  "number": "1.6.3",
  "title": "",
  "body": " Let Then is bijective and conformal from to .  The inverse function is also a linear fractional tranformation with formula  "
},
{
  "id": "proof-6",
  "level": "2",
  "url": "section-6.html#proof-6",
  "type": "Proof",
  "number": "1.6.1",
  "title": "",
  "body": " Let . The domain excludes the simple pole of , and likewise for and , which means that are analytic on respectively. So the argument comes down to showing that these functions are inverses, which can be done by direct computation. We will need the fact that on and that by definition. We leave to the reader the computation that and . Finally, which implies that  "
},
{
  "id": "proposition-5",
  "level": "2",
  "url": "section-6.html#proposition-5",
  "type": "Proposition",
  "number": "1.6.4",
  "title": "",
  "body": " A conformal automorphism of the unit disk is a linear fractional transformation of the form for a fixed angle and a fixed . Moreover, any of this form is a conformal automorphism of .  "
},
{
  "id": "proof-7",
  "level": "2",
  "url": "section-6.html#proof-7",
  "type": "Proof",
  "number": "1.6.2",
  "title": "",
  "body": " We'll start by showing that maps of the form of map the unit circle into itself. First, assume that . Then Because , we also have that , which gives Hence, . Now, note that has only a singularity at , which is outside the unit circle, so is analytic in a neighborhood of . Then by the maximium modulus principle, for any , we must have , which implies that . Also, by , has the same form, and so also defines a conformal map from . Thus any such is a conformal automorphism from .  Now, let's show that any conformal automorphism from must be of this form. We'll be using uniqueness of conformal maps. Assume that is a conformal automorphism. Let , and let . A map of the form also has . Further, if we compute the derivative of at , we'll get , which has argument . Thus, and agree in value and argument at , and so by uniquess of conformal maps, . (note: the argument version of uniqueness follows from the positive derivative version. add this to a future draft or add as exercise.)  "
},
{
  "id": "proposition-6",
  "level": "2",
  "url": "section-6.html#proposition-6",
  "type": "Proposition",
  "number": "1.6.5",
  "title": "",
  "body": " Let be a linear fractional transformation. If is a line and is a circle, then is a line or a circle, and is a line or a circle.  "
},
{
  "id": "proposition-7",
  "level": "2",
  "url": "section-6.html#proposition-7",
  "type": "Proposition",
  "number": "1.6.6",
  "title": "",
  "body": " Given two sets of distinct points and , there is a unique LFT with for . Moreover, if then  "
},
{
  "id": "section-7",
  "level": "1",
  "url": "section-7.html",
  "type": "Section",
  "number": "1.7",
  "title": "The Riemann sphere and the Mobius group",
  "body": " The Riemann sphere and the Mobius group  "
},
{
  "id": "section-8",
  "level": "1",
  "url": "section-8.html",
  "type": "Section",
  "number": "1.8",
  "title": "Exercises 2",
  "body": " Exercises 2   Let . Find the image under of the following sets:  the real line;  the imaginary axis  the unit circle;  the circle centered a 0 with radius 2;   Is the image of a triangle under a conformal map a triangle? Why not? Can it be?  Let . Find the image under of the following sets:  the real line;  the imaginary axis  the unit circle;  the circle centered a 0 with radius 2;  the triangle with vertices .   Find a linear fractional transform that takes the unit disk to the right half plane with .  Find a linear fractional transform that takes the unit disk to itself and maps to .   "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-8.html#exercise-8",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": "Let . Find the image under of the following sets:  the real line;  the imaginary axis  the unit circle;  the circle centered a 0 with radius 2;  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-8.html#exercise-9",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "",
  "body": "Is the image of a triangle under a conformal map a triangle? Why not? Can it be? "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-8.html#exercise-10",
  "type": "Exercise",
  "number": "1.8.3",
  "title": "",
  "body": "Let . Find the image under of the following sets:  the real line;  the imaginary axis  the unit circle;  the circle centered a 0 with radius 2;  the triangle with vertices .  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-8.html#exercise-11",
  "type": "Exercise",
  "number": "1.8.4",
  "title": "",
  "body": "Find a linear fractional transform that takes the unit disk to the right half plane with . "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-8.html#exercise-12",
  "type": "Exercise",
  "number": "1.8.5",
  "title": "",
  "body": "Find a linear fractional transform that takes the unit disk to itself and maps to . "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
