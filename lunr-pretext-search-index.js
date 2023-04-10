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
  "body": " Linear fractional tranformations  A couple of you have asked me how to actually find the conformal maps that are guaranteed to exist by the Riemann Mapping Theorem. For a large class of domains, we can readily (for some value of readily) find these!   A linear fractional transformation is a degree one complex rational function of the form for fixed constants , and where we assume that .    What happens to if ?   We will use the shorthand LFT to stand for linear fractional transformation. From what we learned last term, it should be immediately obvious that an LFT has one pole of order 1 where .  LFTs are the basic building blocks of conformal maps.   Let Then is bijective and conformal from to .  The inverse function is also a linear fractional tranformation with formula    Let . The domain excludes the simple pole of , and likewise for and , which means that are analytic on respectively. So the argument comes down to showing that these functions are inverses, which can be done by direct computation. We will need the fact that on and that by definition. We leave to the reader the computation that and . Finally, which implies that   We leave a little hook for the future here - we can complete the function by assigning the value , which will turn out, which a little caution, to give us a conformal bijection of the Riemann sphere to itself. We'll arrive at the Riemann sphere in the next section.  What sort of functions are in the class of LFTs? If , we get the translation function . If and , then we get , which should be viewed as which is a rotation by and a magnification by . Finally, if and , we get the inversion function .  We noted that the conformal automorphisms of the unit disk form a group - let us characterize these functions.   A conformal automorphism of the unit disk is a linear fractional transformation of the form for a fixed angle and a fixed . Moreover, any of this form is a conformal automorphism of .    We'll start by showing that maps of the form of map the unit circle into itself. First, assume that . Then Because , we also have that , which gives Hence, . Now, note that has only a singularity at , which is outside the unit circle, so is analytic in a neighborhood of . Then by the maximium modulus principle, for any , we must have , which implies that . Also, by , has the same form, and so also defines a conformal map from . Thus any such is a conformal automorphism from .  Now, let's show that any conformal automorphism from must be of this form. We'll be using uniqueness of conformal maps. Assume that is a conformal automorphism. Let , and let . A map of the form also has . Further, if we compute the derivative of at , we'll get , which has argument . Thus, and agree in value and argument at , and so by uniquess of conformal maps, . (note: the argument version of uniqueness follows from the positive derivative version. add this to a future draft or add as exercise.)   Let denote the extended complex plane. If we think of lines as passing through the unique point at in either direction, then lines are essentially circles in . Equivalently, lines map to great circles passing through the north pole in the Riemann sphere model. Linear fractional transforms on send circles to circles with this identification for lines.   Let be a linear fractional transformation. If is a line and is a circle, then is a line or a circle, and is a line or a circle.   Some authors use the amusingly awful word clircle to include both cases. We'll be more dignified and just say circle when we're referring to these shapes in the extended plane or sphere.  Now suppose that we are given three points in . If these are collinear, the three points determine a unique line. If they are not collinear, they determine a unique circle. Because LFTs take circles\/lines to circles lines, we might suspect that the implication of the geometric fact above is that there is a unique linear fractional map carrying any set to the set , and this is indeed the case.   Given two sets of distinct points and , there is a unique LFT with for . Moreover, if then    Useful conformal maps    "
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
  "id": "figure-1",
  "level": "2",
  "url": "section-6.html#figure-1",
  "type": "Figure",
  "number": "1.6.7",
  "title": "",
  "body": " Useful conformal maps   "
},
{
  "id": "section-7",
  "level": "1",
  "url": "section-7.html",
  "type": "Section",
  "number": "1.7",
  "title": "Exercises 2",
  "body": " Exercises 2   Let . Find the image under of the following sets:  the real line;  the imaginary axis  the unit circle;  the circle centered a 0 with radius 2;   Is the image of a triangle under a conformal map a triangle? Why or why not? How about on the sphere? (What is a triangle on a sphere?)  Let . Find the image under of the following sets:  the real line;  the imaginary axis  the unit circle;  the circle centered a 0 with radius 2;  the triangle with vertices .   Find a linear fractional transform that takes the unit disk to the right half plane with .  Find a linear fractional transform that takes the unit disk to itself and maps to .  Determine the image of the unit disk under the map . Where is the image of the real axis? What about the imaginary axis?  Find a conformal map taking the quarter of unit disk in the first quadrant to the entire unit disk. Hint: isn't good enough. Why? Can you do it with a bijective conformal map?  Show that a composition of two linear fractional maps is a linear fractional map.   "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-7.html#exercise-8",
  "type": "Exercise",
  "number": "1.7.1",
  "title": "",
  "body": "Let . Find the image under of the following sets:  the real line;  the imaginary axis  the unit circle;  the circle centered a 0 with radius 2;  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-7.html#exercise-9",
  "type": "Exercise",
  "number": "1.7.2",
  "title": "",
  "body": "Is the image of a triangle under a conformal map a triangle? Why or why not? How about on the sphere? (What is a triangle on a sphere?) "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-7.html#exercise-10",
  "type": "Exercise",
  "number": "1.7.3",
  "title": "",
  "body": "Let . Find the image under of the following sets:  the real line;  the imaginary axis  the unit circle;  the circle centered a 0 with radius 2;  the triangle with vertices .  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-7.html#exercise-11",
  "type": "Exercise",
  "number": "1.7.4",
  "title": "",
  "body": "Find a linear fractional transform that takes the unit disk to the right half plane with . "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-7.html#exercise-12",
  "type": "Exercise",
  "number": "1.7.5",
  "title": "",
  "body": "Find a linear fractional transform that takes the unit disk to itself and maps to . "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-7.html#exercise-13",
  "type": "Exercise",
  "number": "1.7.6",
  "title": "",
  "body": "Determine the image of the unit disk under the map . Where is the image of the real axis? What about the imaginary axis? "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-7.html#exercise-14",
  "type": "Exercise",
  "number": "1.7.7",
  "title": "",
  "body": "Find a conformal map taking the quarter of unit disk in the first quadrant to the entire unit disk. Hint: isn't good enough. Why? Can you do it with a bijective conformal map? "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-7.html#exercise-15",
  "type": "Exercise",
  "number": "1.7.8",
  "title": "",
  "body": "Show that a composition of two linear fractional maps is a linear fractional map. "
},
{
  "id": "section-8",
  "level": "1",
  "url": "section-8.html",
  "type": "Section",
  "number": "1.8",
  "title": "Reflection across a circle",
  "body": " Reflection across a circle  Recall that for the unit circle , we have the nice reflection map , which maps an element to its reflection across the circle  , which lies on the same ray - that is, the map sends Notice then that the map takes the disk to what we might call the outer disk .  We're going to extend this idea to general circles (including lines, which should be thought of as circles of infinite radius in this context).   Existence of a reflection point  Let be a circle (or line), and let be a point. Then the familiy of all circles passing through that intersect at right angles also intersect at a single point .    In the case where is a line, the argument follows from basic geometry, and is the point on the line perpendicular to passing through and equidistant to with .  If is a circle, then the interior of is a disk, and we can conformally map this disk with a LFT to the upper half plane, with the circle mapping to the real line (why?). Now the family of circles passing through and orthogonal to continue to pass through the point and remain orthogonal to the image of . By the line case, these circles must also pass through the reflection . Finally, we conclude that is the reflection of .    LFTs preserve reflection  If is a linear fractional tranform and is a circle (or line), then .   The next proposition gives a formula for computing in the case that is a general circle, generalizing the map that sends for the unit circle. In the case that is a line, we can just set to be the perpendicular reflection across the line.   Reflection formula  If is a circle with center and radius , then the map is a composition of LFTs and complex conjugation. A formula for the reflection is    We conclude with the following proposition concerning the properties of the reflection map.   Properties of reflection     preserves the magnitude of angles, but reverses orientation (just as conjugation does).  maps circles to circles.     "
},
{
  "id": "p-82",
  "level": "2",
  "url": "section-8.html#p-82",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reflection across the circle "
},
{
  "id": "proposition-existence-of-a-reflection-point",
  "level": "2",
  "url": "section-8.html#proposition-existence-of-a-reflection-point",
  "type": "Proposition",
  "number": "1.8.1",
  "title": "Existence of a reflection point.",
  "body": " Existence of a reflection point  Let be a circle (or line), and let be a point. Then the familiy of all circles passing through that intersect at right angles also intersect at a single point .  "
},
{
  "id": "proof-8",
  "level": "2",
  "url": "section-8.html#proof-8",
  "type": "Proof",
  "number": "1.8.1",
  "title": "",
  "body": " In the case where is a line, the argument follows from basic geometry, and is the point on the line perpendicular to passing through and equidistant to with .  If is a circle, then the interior of is a disk, and we can conformally map this disk with a LFT to the upper half plane, with the circle mapping to the real line (why?). Now the family of circles passing through and orthogonal to continue to pass through the point and remain orthogonal to the image of . By the line case, these circles must also pass through the reflection . Finally, we conclude that is the reflection of .  "
},
{
  "id": "proposition-",
  "level": "2",
  "url": "section-8.html#proposition-",
  "type": "Proposition",
  "number": "1.8.2",
  "title": "LFTs preserve reflection.",
  "body": " LFTs preserve reflection  If is a linear fractional tranform and is a circle (or line), then .  "
},
{
  "id": "proposition-reflection-formula",
  "level": "2",
  "url": "section-8.html#proposition-reflection-formula",
  "type": "Proposition",
  "number": "1.8.3",
  "title": "Reflection formula.",
  "body": " Reflection formula  If is a circle with center and radius , then the map is a composition of LFTs and complex conjugation. A formula for the reflection is   "
},
{
  "id": "proposition-properties-of-reflection",
  "level": "2",
  "url": "section-8.html#proposition-properties-of-reflection",
  "type": "Proposition",
  "number": "1.8.4",
  "title": "Properties of reflection.",
  "body": " Properties of reflection     preserves the magnitude of angles, but reverses orientation (just as conjugation does).  maps circles to circles.    "
},
{
  "id": "section-9",
  "level": "1",
  "url": "section-9.html",
  "type": "Section",
  "number": "1.9",
  "title": "Conformal maps and harmonic equations",
  "body": " Conformal maps and harmonic equations   Vector fields and harmonic functions  We'll recall some definitions. Let be a domain in (which we will identify with when in the analytic setting). A scalar field on is a function - in this context, we'll think of such a function as assigning a value to each point in .  A vector field on is a function that assigns to each point in a vector . If happens to be continuously differentiable, then a natural vector field associated with is given by the gradient field  . Continuous gradient fields have the property that line integrals in the field are path independent (which should remind you of the Cauchy-Goursat theorem). A function with continuous gradient field is called a potential function .  There is useful geometry connecting potentials and their gradient fields. Recall that a level curve for is the set of points with for constants . Given that the gradient vectors measure the direction of greatest change in a scalar field, it shouldn't be surprising that the gradient vector at a point in is orthogonal to the level curve through the point. If the vector field varies continuously, we might expect that we can trace flow lines through . A flow line (say parametrized by ) should have the property that at every point , . Typically, the problem of computing flows lines explicitly is hard. However, for certain functions , this problem turns out to be much easier.  In particular, if is harmonic, the associated gradient field has some very nice features. First, since is , it isn't hard to calculate that the curl of is zero. (One can do this by extending to a function in by putting 0 in the coordinate, computing , and applying Clairaut's theorem.)  Second, computing the divergence of , we get and so is also divergence free.  Because the gradient field arising from a harmonic is function is so nice, we get a magical solution to the flow line problem.   Flow lines for harmonic functions  Suppose that is harmonic on a domain . If are lines of constant value for (so-called level curves), then the level curves of the harmonic conjugate are the flow lines of .   Since a harmonic function and its harmonic conjugate form the real and imaginary parts of analytic functions, we see immediately the connection to ideas from complex analysis. Indeed, the function is called a complex potential function.  We now consider the problem of finding a harmonic function on a domain that agrees with some sort of given boundary conditions. Recall that a harmonic function on a domain is a function that satisfies Laplace's equation ; that is, is harmonic on if  Boundary value problems associated with harmonic functions come with two varieties of standard conditions.  Dirichlet problem: we specify the values of at the boundary of .  Neumann problem: we specify the derviative of at the boundary of , in the sense that we specify      The Dirichlet problem on the disk  It turns out that there is a very nice solution to the Dirichlet problem in the case that the domain is a disk. A famous result called the Poisson integral theorem gives us the desried solution. Harmonic functions have a mean value property much like Gauss's mean value theorem for analytic functions. We'll restrict our attention to the case of the unit disk (which implies the result for any other disk).   Harmonic mean value property  Suppose that is harmonic in a neighborhood of the unit disk. Then   Poisson's formula extends the mean value property to give the value of at every point in the disk in terms of the values of on the boundary.   Poisson integral formula  Assume that is harmonic on a neighborhood of the unit disk. Then for any ,   The proof of the theorem above goes essentially by applying the conformal automorphism of that takes . Then, we apply the harmonic mean value property and chase through the effect on the integral of the conformal map.  The solution to the Dirichlet problem is basically a converse to Poisson's formula - it asserts that given a function continuous on the unit circle , we can construct a unique harmonic function on that agrees with on the boundary.   Solution to Dirichlet problem on the disk  Let be a continuous function on . Then there exists a unique harmonic function on that extends continuously to on . The formula for with is     Neumann conditions  Note that while we have a standard solution to the Dirichlet problem on the disk for any continuous function on the circle bounding the disk, we have much stricter requirements for our choice of in the Neumann case.  Suppose that we have a harmonic function on that extends to a differentiable function at the boundary (we may as well assume that the boundary is a simple closed and piecewise continuous, parametrized by the curve ). Let denote the derivative where is the normal vector to the boundary. Then by the divergence formulation of Green's theorem, we get  Thus we consider boundary functions with In the context of these notes, we actually will restrict ourselves to the simplest case, , which corresponds to zero-flux across the boundary, a condition known as an insulated boundary. This means that flows will be parallel the the boundary in this case (which corresponds to the simple case of uniform fluid flow, e.g.).    Standard solutions and conformal maps  Our essential approach will be to construct a standard solution that describes some physical situation and then conformally map it to more interesting regions, which will also transform the solution.  As a first standard solution, consider the case of a fluid that is incompressible and nonviscous. If we also assume that the flow is given by an integrable vector field so that for a potential function , then we have that is harmonic. The conjugate of is called a stream function. Consider the vector field given by    Uniform flow, velocity   The vector field is the gradient of the potential function , which in turn is the real part of the complex function . Since is the real part of an analytic function, it is harmonic. Further, as the flow is parallel to the boundary, the Neumann condition is met.  A map that first arose in the early study of airfoils is the Joukowsky transform , defined by . An exercise will ask you to look at this map more closely. For the purposes of our example, this map transforms the upper half plane with half of a unit disk removed conformally to the upper half plane.       Image of   We'll need the following highly useful interaction between conformal maps and harmonic functions.   If is a harmonic function on a domain and is a conformal map from a domain to , then is harmonic on .   How can we blend all of these ingredients together? We've already seen that is a solution to Laplace's equation on the upper half plane satisfying the condition that on the real axis. Lifting to the complex potential , we compose with the map to get a new function that is analytic on the upper half plane with the unit disk removed. The real and imaginary parts of give harmonic functions that describe the equipotentials and the flow lines for the transformation of uniform flow under (the geometry is preserved by conformality). The image below shows the effect on the flow lines of the transformation.       Stream lines under the map   An exercise will ask you to evaluate this more carefully.    Half plane solutions  In the Dirichlet setting, we already have the Poisson integral formula (which can be applied to any domain conformally equivalent to a disk). However, this is often way more than necessary, as frequently boundary conditions are specified as constant on a finite number of pieces of the boundary. In this sort of case, a standard solution is most easily defined on the upper half plane.  We want to find a harmonic function on the upper half plane with the boundary condition that when and when .  If , one such solution is the function where Notice that and so is harmonic.   Basic half plane standard solution    With a bit of shifting, we can construct a superposition of solutions that describes the more general case of a finite number of intervals on the real axis, each assigned a constant initial value. For example, consider the boundary problem in the figure below. We have four regions, separated by the points , and initial temperatures on the induced intervals given by . Now take the angles from the points to . Then the standard upper half plane solution in this case is   A bit of translating will get you the complex potential for which (after an appropriate choice of branch). That the boundary conditions match is left to the reader. Note that this construction can be made to handle an arbitrary finite partition of the real axis into sections of constant value.   General half plane standard solution    Finally, we'll look an example application. In the study of heat, the harmonic function on a domain represents temperature, and its level curves are called isotherms . The harmonic conjugate of , which we can denote has level curves that represent the flux lines induced by the gradient field . Our task is to find a harmonic function on the unit disk with the left half circle on the boundary held at temperature and the right circle held at .  First, we'll translate the boundary conditions to the upper half plane using the usual conformal map In the halfplane, we can find a function fitting the standand half plane solution by which has complex potential  One approach to constructing a solution on the disk is to precompose with the conformal map taking the disk to the upper half plane; that is, let be the complex function on the unit disk given by   Using a standard solution to solve a disk problem    Now, we can look at the level curves of and to detect the isotherms and flux lines for our function on the disk. The flux lines in the plane and disk setting are visualized in the figure below.   Flux lines for standard half plane and disk solutions        "
},
{
  "id": "p-88",
  "level": "2",
  "url": "section-9.html#p-88",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar field "
},
{
  "id": "p-89",
  "level": "2",
  "url": "section-9.html#p-89",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector field gradient field potential function "
},
{
  "id": "p-90",
  "level": "2",
  "url": "section-9.html#p-90",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "level curve flow lines "
},
{
  "id": "theorem-flow-lines-for-harmonic-functions",
  "level": "2",
  "url": "section-9.html#theorem-flow-lines-for-harmonic-functions",
  "type": "Theorem",
  "number": "1.9.1",
  "title": "Flow lines for harmonic functions.",
  "body": " Flow lines for harmonic functions  Suppose that is harmonic on a domain . If are lines of constant value for (so-called level curves), then the level curves of the harmonic conjugate are the flow lines of .  "
},
{
  "id": "p-94",
  "level": "2",
  "url": "section-9.html#p-94",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex potential "
},
{
  "id": "p-95",
  "level": "2",
  "url": "section-9.html#p-95",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "harmonic Laplace's equation "
},
{
  "id": "theorem-mean-value",
  "level": "2",
  "url": "section-9.html#theorem-mean-value",
  "type": "Theorem",
  "number": "1.9.2",
  "title": "Harmonic mean value property.",
  "body": " Harmonic mean value property  Suppose that is harmonic in a neighborhood of the unit disk. Then  "
},
{
  "id": "theorem-poisson-integral-formula",
  "level": "2",
  "url": "section-9.html#theorem-poisson-integral-formula",
  "type": "Theorem",
  "number": "1.9.3",
  "title": "Poisson integral formula.",
  "body": " Poisson integral formula  Assume that is harmonic on a neighborhood of the unit disk. Then for any ,  "
},
{
  "id": "theorem-solution-to-dirichlet-problem-on-the-disk",
  "level": "2",
  "url": "section-9.html#theorem-solution-to-dirichlet-problem-on-the-disk",
  "type": "Theorem",
  "number": "1.9.4",
  "title": "Solution to Dirichlet problem on the disk.",
  "body": " Solution to Dirichlet problem on the disk  Let be a continuous function on . Then there exists a unique harmonic function on that extends continuously to on . The formula for with is  "
},
{
  "id": "p-103",
  "level": "2",
  "url": "section-9.html#p-103",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "insulated "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "section-9.html#figure-2",
  "type": "Figure",
  "number": "1.9.5",
  "title": "",
  "body": "  Uniform flow, velocity  "
},
{
  "id": "figure-3",
  "level": "2",
  "url": "section-9.html#figure-3",
  "type": "Figure",
  "number": "1.9.6",
  "title": "",
  "body": "     Image of  "
},
{
  "id": "proposition-harmonic-functions-",
  "level": "2",
  "url": "section-9.html#proposition-harmonic-functions-",
  "type": "Proposition",
  "number": "1.9.7",
  "title": "",
  "body": " If is a harmonic function on a domain and is a conformal map from a domain to , then is harmonic on .  "
},
{
  "id": "figure-4",
  "level": "2",
  "url": "section-9.html#figure-4",
  "type": "Figure",
  "number": "1.9.8",
  "title": "",
  "body": "     Stream lines under the map  "
},
{
  "id": "figure-5",
  "level": "2",
  "url": "section-9.html#figure-5",
  "type": "Figure",
  "number": "1.9.9",
  "title": "",
  "body": " Basic half plane standard solution   "
},
{
  "id": "figure-6",
  "level": "2",
  "url": "section-9.html#figure-6",
  "type": "Figure",
  "number": "1.9.10",
  "title": "",
  "body": " General half plane standard solution   "
},
{
  "id": "p-116",
  "level": "2",
  "url": "section-9.html#p-116",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isotherms flux lines "
},
{
  "id": "figure-7",
  "level": "2",
  "url": "section-9.html#figure-7",
  "type": "Figure",
  "number": "1.9.11",
  "title": "",
  "body": " Using a standard solution to solve a disk problem   "
},
{
  "id": "figure-8",
  "level": "2",
  "url": "section-9.html#figure-8",
  "type": "Figure",
  "number": "1.9.12",
  "title": "",
  "body": " Flux lines for standard half plane and disk solutions      "
},
{
  "id": "section-10",
  "level": "1",
  "url": "section-10.html",
  "type": "Section",
  "number": "1.10",
  "title": "Exercises 3",
  "body": " Exercises 3   Compute the image of the triangle with corners under inversion across the unit circle. Where does the interior go? Are the angles between the sides preserved in the image?  Show that a linear fractional transform can have at most two points so that . Write an example of a LFT with .  Show that the map takes the unit circle to the segment . Where is this map conformal?  Compute the real and imaginary parts of the composition of a uniform flow on the upper half plane with the map . Use your favorite visualizer to confirm that the level curves for these functions are orthogonal. You might also consider adding an image of the unit circle to your plot. (I used desmos for this).  Prove that the map given by is harmonic on the upper half plane, where . Show that this function has boundary values of for and for .  Use the solution above to find a harmonic solution to the Dirichlet problem on the disk where on the upper half of the unit circle, and on the lower half of the unit circle. Hint: consider the conformal map  Find the image of the upper half of the unit disk under the map (That is, it isn't enough to know what the answer is, you need to show it!) Is this map conformal? What is the inverse map?  Determine the image of the map on the half-strip with boundary with and (your image should be a quarter-plane: make sure to track where the boundary pieces map). Use this conformal map to find a harmonic function giving the temperature on the first quadrant, with boundary conditions on the positive imaginary axis, is insulated on the interval , and on the rest of the real axis. (Bonus, use a visualizer to draw the flow lines by finding the level curves of the harmonic conjugate of .)   "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-10.html#exercise-16",
  "type": "Exercise",
  "number": "1.10.1",
  "title": "",
  "body": "Compute the image of the triangle with corners under inversion across the unit circle. Where does the interior go? Are the angles between the sides preserved in the image? "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-10.html#exercise-17",
  "type": "Exercise",
  "number": "1.10.2",
  "title": "",
  "body": "Show that a linear fractional transform can have at most two points so that . Write an example of a LFT with . "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "section-10.html#exercise-18",
  "type": "Exercise",
  "number": "1.10.3",
  "title": "",
  "body": "Show that the map takes the unit circle to the segment . Where is this map conformal? "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-10.html#exercise-19",
  "type": "Exercise",
  "number": "1.10.4",
  "title": "",
  "body": "Compute the real and imaginary parts of the composition of a uniform flow on the upper half plane with the map . Use your favorite visualizer to confirm that the level curves for these functions are orthogonal. You might also consider adding an image of the unit circle to your plot. (I used desmos for this). "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-10.html#exercise-20",
  "type": "Exercise",
  "number": "1.10.5",
  "title": "",
  "body": "Prove that the map given by is harmonic on the upper half plane, where . Show that this function has boundary values of for and for . "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "section-10.html#exercise-21",
  "type": "Exercise",
  "number": "1.10.6",
  "title": "",
  "body": "Use the solution above to find a harmonic solution to the Dirichlet problem on the disk where on the upper half of the unit circle, and on the lower half of the unit circle. Hint: consider the conformal map "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "section-10.html#exercise-22",
  "type": "Exercise",
  "number": "1.10.7",
  "title": "",
  "body": "Find the image of the upper half of the unit disk under the map (That is, it isn't enough to know what the answer is, you need to show it!) Is this map conformal? What is the inverse map? "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "section-10.html#exercise-23",
  "type": "Exercise",
  "number": "1.10.8",
  "title": "",
  "body": "Determine the image of the map on the half-strip with boundary with and (your image should be a quarter-plane: make sure to track where the boundary pieces map). Use this conformal map to find a harmonic function giving the temperature on the first quadrant, with boundary conditions on the positive imaginary axis, is insulated on the interval , and on the rest of the real axis. (Bonus, use a visualizer to draw the flow lines by finding the level curves of the harmonic conjugate of .) "
},
{
  "id": "section-11",
  "level": "1",
  "url": "section-11.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Gamma Function",
  "body": " The Gamma Function   Interpolation  An interpolation problem is one where we are given input data and output data , and we are asked to find an interpolating function  subject to some kind of conditions (e.g. continuity, bounded, differentiable, etc) so that  As an example, consider the problem of constructing a polynomial that interpolates the points . If these points arent collinear, one approach to solving the problem is to use elbow grease - we can write a generic parabola and solve the system of three equations that arise from plugging in each of the points. Another approach, based on noticing patterns, is called Lagrange interpolation . We notice that is a function so that and that . We can construct similar functions and . Then we can assemble these into a interpolating function by multiplying the correct piece by the desired output value - It turns out that the Lagrange interpolating function will be the unique polynomial of lowest degree that interpolates the data.  Of course, we can construct more exotic interpolation problems. We're going to begin with a problem where we wish to interpolate an infinite number of data points.    The Gamma Function  We wish to construct a function so that - that is, we want a function that interpolates the factorial function. (One way of thinking about the objective is to give an expression like meaning, as formulas involving factorials can often be extended to take non-integer values). We'll want our function to be continuous and to be defined on the largest domain we can construct.  Mathematicians of the 18th century, in the course of working out the basics of the theory of integral transforms, noticed that something special happened to the integral when .  The astute reader may notice that this is very similar to the Laplace transform .   Following Bernoulli (and Legendre), make the following definition involving our interesting integral. Using integration by parts, we can derive Coupled with the observation that , we get that Now, the nice thing about the form of the integral in the definition of is that we can apply it to any , and in turn and get a convergent integral. Thus, the form of the gamma function allows the continuation of the function off of the positive integers and onto the entire right half plane.  The equation is an example of a functional equation (or an equation where the unknowns are functions), and it turns out that we can use this equation to extend the domain of the gamma function beyond the right half plane.  Suppose that we are given a point with . The integral that defines on the right half plane isn't convergent on this value. It is reasonable to expect that if is to be made meaningful, then the functional equation should hold. That is, we desire Accordingly, we can define  at via Notice that this definition works for any with with the exception of the point , which is a pole of our extension. Thus, we've extended the domain of to the strip with the exception of the pole at . Proceeding inductively, we can continue to define further strips in terms of the previous using the functional equation. The resulting function is the unique meromorphic function defined this way on all of .   "
},
{
  "id": "p-128",
  "level": "2",
  "url": "section-11.html#p-128",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interpolation interpolating function "
},
{
  "id": "section-12",
  "level": "1",
  "url": "section-12.html",
  "type": "Section",
  "number": "2.2",
  "title": "Analytic continuation",
  "body": " Analytic continuation  "
},
{
  "id": "section-13",
  "level": "1",
  "url": "section-13.html",
  "type": "Section",
  "number": "3.1",
  "title": "Prerequisites",
  "body": " Prerequisites  Complex analysis  Let us begin with a very useful sort-of converse to the Cauchy-Goursat theorem   Cauchy-Goursat  Let be analytic on a simply connected domain . Then for any simple closed curve contained in .   Morera's theorem  Let be a continuous function defined on an open domain . If for every simple closed path contained in , then is analytic on .    Assume without loss of generality that the domain is connected (and so path-connected). Assume that satisifies the hypotheses of the theorem. We will construct an anti-derivative for , which will allow us to conclude that is analytic.  Pick a basepoint in , and for any other in , let be a simple path from to . Let be the function on given by  Note that this definition does not depend on the choice of path. Assume that is another path from to . Then, by hypothesis, which implies that .  Note futher that a different choice of basepoint (say ) causes the resulting function to differ from only by the constant where is any simple path from to . Thus, choice of basepoint does not affect the derivative.  It remains to show that . This boils down to a difference quotient argument. Consider for some small complex number . Then (The notation is justified by the path independence of integrals of .) Now, Since has path independent line integrals, choose the line segment between and . Since is continuous,  We conclude that is differentiable at and thus analytic at with derivative , which implies that is analytic. Since this holds for all , we conclude that is analytic on .   Morera's theorem is often used with weaker (equivalent) hypotheses - that is, we need only check that around the boundary of any closed triangle contained in .  Morera's theorem is the standard method used to prove that a constructed function is holomorphic. The theorem is used so often and so widely that it may sometimes be invoked without reference (though not in our case).  One nice immediate result that we get from Morera is parallel to the (fundamental) result from real analysis that uniform limits of continuous functions are continuous.   The uniform limit of a sequence of analytic functions is analytic.    Suppose that a sequence of analytic functions converges uniformly to a continuous limit function on an open disk. The Cauchy-Goursat theorem implies that, for all , for any simple closed curve contained in the disk. Using uniform converge to push the limit through the integral, we get for every simple closed curve in the disk, and so by Morera's theorem, must be analytic on the disk.  This result extends to domains, as we can recreate this argument in a neighborhood of any in .   Since we'll be considering functions defined as series, it will be useful to combine the results above with a test for uniform convergence called the Weierstrass M-test.  M-test  Supposet that is a sequence of functions on a common domain and that there exists a sequence of non-negative numbers satisfying  for all ;   .  Then converges absolutely and uniformly on .  out  Measure theory  To be rigorous about convergence, we're going to need some extremely useful tools from analysis. The discussion here will mostly bracket out proofs, which are typically done in a graduate course in real analysis.  A measure is a function that assigns a numerical value to a set. The idea comes from an effort to generalize the notion of the length of an interval. A brief overview of the setup follows. We have a set (for example, ), and we want to define a function (note the inclusion of ). It turns out that we can't measure every subset of (that darn axiom of choice). So we equip with a sort of topology called a -algebra consisting of so called measurable sets.   Given a set , a -algebra on is a non-empty collection of subsets of that is closed under complements, countable unions, and countable intersections.    Let be a set and a -algebra on . A set function is a measure if  For all , .  .  For all countable collections of pairwise disjoint sets,    One important example of a measure is Lebesgue measure , which directly generalizes the length of intervals. Lebesgue measure is usually defined on the Borel sets, which is the -algebra constructed by starting with the open intervals in and combining them in all ways to ensure that the conditions for a -algebra are met. Measures can be far stranger than Lebesgue measure. We're going to be using a set function that assigns the value 1 to each natural number, for example. This will let us use high powered theorems about convergence in integrals to the context of series. (A series really is nothing more than a discrete integral in this setting!)   "
},
{
  "id": "thm-cauchy-goursat",
  "level": "2",
  "url": "section-13.html#thm-cauchy-goursat",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "Cauchy-Goursat.",
  "body": " Cauchy-Goursat  Let be analytic on a simply connected domain . Then for any simple closed curve contained in .  "
},
{
  "id": "thm-morera",
  "level": "2",
  "url": "section-13.html#thm-morera",
  "type": "Theorem",
  "number": "3.1.2",
  "title": "Morera's theorem.",
  "body": "Morera's theorem  Let be a continuous function defined on an open domain . If for every simple closed path contained in , then is analytic on .  "
},
{
  "id": "proof-9",
  "level": "2",
  "url": "section-13.html#proof-9",
  "type": "Proof",
  "number": "3.1.1.1",
  "title": "",
  "body": " Assume without loss of generality that the domain is connected (and so path-connected). Assume that satisifies the hypotheses of the theorem. We will construct an anti-derivative for , which will allow us to conclude that is analytic.  Pick a basepoint in , and for any other in , let be a simple path from to . Let be the function on given by  Note that this definition does not depend on the choice of path. Assume that is another path from to . Then, by hypothesis, which implies that .  Note futher that a different choice of basepoint (say ) causes the resulting function to differ from only by the constant where is any simple path from to . Thus, choice of basepoint does not affect the derivative.  It remains to show that . This boils down to a difference quotient argument. Consider for some small complex number . Then (The notation is justified by the path independence of integrals of .) Now, Since has path independent line integrals, choose the line segment between and . Since is continuous,  We conclude that is differentiable at and thus analytic at with derivative , which implies that is analytic. Since this holds for all , we conclude that is analytic on .  "
},
{
  "id": "thm-unif-holo",
  "level": "2",
  "url": "section-13.html#thm-unif-holo",
  "type": "Theorem",
  "number": "3.1.3",
  "title": "",
  "body": " The uniform limit of a sequence of analytic functions is analytic.  "
},
{
  "id": "proof-10",
  "level": "2",
  "url": "section-13.html#proof-10",
  "type": "Proof",
  "number": "3.1.1.2",
  "title": "",
  "body": " Suppose that a sequence of analytic functions converges uniformly to a continuous limit function on an open disk. The Cauchy-Goursat theorem implies that, for all , for any simple closed curve contained in the disk. Using uniform converge to push the limit through the integral, we get for every simple closed curve in the disk, and so by Morera's theorem, must be analytic on the disk.  This result extends to domains, as we can recreate this argument in a neighborhood of any in .  "
},
{
  "id": "thm-M-test",
  "level": "2",
  "url": "section-13.html#thm-M-test",
  "type": "Theorem",
  "number": "3.1.4",
  "title": "M-test.",
  "body": "M-test  Supposet that is a sequence of functions on a common domain and that there exists a sequence of non-negative numbers satisfying  for all ;   .  Then converges absolutely and uniformly on .  "
},
{
  "id": "p-155",
  "level": "2",
  "url": "section-13.html#p-155",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "measure "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "section-13.html#definition-4",
  "type": "Definition",
  "number": "3.1.5",
  "title": "",
  "body": " Given a set , a -algebra on is a non-empty collection of subsets of that is closed under complements, countable unions, and countable intersections.  "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "section-13.html#definition-5",
  "type": "Definition",
  "number": "3.1.6",
  "title": "",
  "body": " Let be a set and a -algebra on . A set function is a measure if  For all , .  .  For all countable collections of pairwise disjoint sets,   "
},
{
  "id": "p-158",
  "level": "2",
  "url": "section-13.html#p-158",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lebesgue measure "
},
{
  "id": "section-14",
  "level": "1",
  "url": "section-14.html",
  "type": "Section",
  "number": "3.2",
  "title": "Infinite products and the zeta function",
  "body": " Infinite products and the zeta function  The zeta function  Riemann zeta function  Let be a real number. Define the Riemann zeta function by   This is essentially taking the -series from calculus and turning it into a function using the power as a parameter. It isn't hard to see that this function will converge for real via the integral test (exercise).   is holomorphic for .    First, note that for a positive real number and a complex power , note that  For , let be a complex number with . Consider the sequence of functions We have      By the Weierstrass -test , the series converges uniformly and absolutely to where .  Now note that each is analytic, and so each partial sum is analytic. So is a sequence of analytic functions converging uniformly to on . Then by , we conclude that is analytic on . Because was arbitrary, the results extend to all points in the halfplane .   In fact, we can say slightly more almost immediately. First, let's codify the result that we used in the proof of the theorem above.  Weierstrass theorem for series  Let be a sequence of holomorphic functions on a domain , and assume that converges uniformly on every closed and bounded subset of . Then  is holomorphic on .  For any , the series of th derivatives converges on and converges uniformly and absolutely on every closed and bounded subset of to the function . That is, the derivative of the limit is the limit of the derivatives.    Corollary to  For , and is holomorphic.   The first thing we might like to do is ask if we know the value of for any input points at all. The famous problem identified with the case where is called the Basel problem . Its solution will showcase some of the issues we face when dealing with the task of extending the zeta function off the natural domain.  Basel problem      First, we'll show Euler's (ingenious but rather iffy) argument to highlight points where we need to drive deeper. To begin, Euler knew that and so He wants to factor this polynomial using the fundamental theorem of algebra as but he can't, as this has no hope of converging in the infinite product. Instead, he defines terms of the form - after all, these terms vanish at the same set of zeros. Making the rather large leap that the function is determined by its zeros and a single value (as in the case of a polynomial), Euler writes which at least has a shot of converging. He then notices that a pattern emerges as you start formally multiplying out this product. and He makes the leap that Now, still with the underlying assumption that all of this converges and makes sense, he compares the coefficients of in his two power series to get which is just  This argument raises serious questions. Among them  Is an analytic function determined uniquely by its zeros?  Does the fundamental theorem of algebra actually apply to infinite polynomials ?  What does it mean to converge as an infinite product?  The answers to these questions will be answered in the subsequent discussion.   Infinite products  Euler's solution to the Basel problem points out that we need to know something about convergence of infinite products. We'll start with real numbers and work up to the complex case. Given a sequence of real numbers, we can consider the sequence of partial products . Letting the sequence tend to infinity gives an infinite product (in the same way that an infinite sum is just a representation of a sequence of partial sums). The standard symbol used to denote an infinite product on the sequence is .We can likewise denote the th partial product by   An infinite product with no zero factors is convergent if and only if there exists some real number so that as . In this case, is the value of the product. If such , then diverges to 0. If there are infinitely many zero factors , then diverges to 0. If there are finitely many zero factors , then .   We can construct a theory of convergence entirely in terms of products, but it is more elegant for our needs to convert questions of convergence into equivalent questions about series via the logarithm (assuming positive terms or absolute value).   Let be a sequence of positive real numbers. Then the infinite product converges if and only if the series converges.    Apply the logarithm to the product. The series will converge if and only if the product does. Now note that (by L'Hospital or observation of the power series for ). If does not tend to zero, the sum, and thus the product, will diverge by the test for divergence. So assume . Then, as the limit comparison test gives that converges if and only if converges, which establishes the claim.   This result establishes, for example, the convergence of the -series-like products where . That is, infinite products converge when their factors tend quickly to 1 .  How do we take this and lift it to infinite products of complex numbers? We'll follow Tao here.  Absolutely convergent products  Let be a sequence of complex numbers so that . Then converges (absolutely). Furthermore, this product is zero if and only if one of the factors is zero.    Because converges, the test for divergence gives . Then there exists an so that the tail of the sequence is contained in the disk for . Factor the product into Convergence of the whole product will then be equivalent to convergence of . Because the tail is away from the origin, we can apply the standard branch of the complex logarithm, , on and write Now, Similarly to the argument in the previous proof, note that the power series for is , and so by the limit comparison test, is absolutely convergent. On application of the complex exponential, we conclude that converges to .   We also have the following product form of the Weierstrass -test to measure uniform convergence of products of functions.  -test, product form  Let be a set, and for all let be a bounded function. If for some finite we have then the partial products converge uniformly to on .    Product formula for the zeta function  We're now in position to connect the zeta function to the primes by way of the Euler product formula . First, let's recall the fundamental theorem of arithmetic.  Fundamental theorem of arithmetic  Every natural number has a unique representation as a product where the product is over the primes and the exponents , only finitely many of which are non-zero.   Product formula for .  For with , we have where the product is taken over the primes . This representation is absolutely convergent.    For each , we have which we can formally rearrange as  Now, we're going to build from the bottom. Given , let be the set of natural numbers with prime factorization containing primes no larger than and exponents no greater than . That is, has a representation and . The first observation to make is that as , .  The next step is a combinatorial observation. To illustrate, suppose that and . Then Now let , so that we're picking up numbers with in the prime factorization. Here's where we see the pattern we're interested in show up. If you see what's happening here, it shouldn't be hard to believe that for all .  Now, we'll take a look at what happens to this sum as . As , the first observation to make is that the sums by the geometric series formula.    "
},
{
  "id": "def-zeta",
  "level": "2",
  "url": "section-14.html#def-zeta",
  "type": "Definition",
  "number": "3.2.1",
  "title": "Riemann zeta function.",
  "body": "Riemann zeta function  Let be a real number. Define the Riemann zeta function by  "
},
{
  "id": "thm-zeta-holo",
  "level": "2",
  "url": "section-14.html#thm-zeta-holo",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "",
  "body": " is holomorphic for .  "
},
{
  "id": "proof-11",
  "level": "2",
  "url": "section-14.html#proof-11",
  "type": "Proof",
  "number": "3.2.1.1",
  "title": "",
  "body": " First, note that for a positive real number and a complex power , note that  For , let be a complex number with . Consider the sequence of functions We have      By the Weierstrass -test , the series converges uniformly and absolutely to where .  Now note that each is analytic, and so each partial sum is analytic. So is a sequence of analytic functions converging uniformly to on . Then by , we conclude that is analytic on . Because was arbitrary, the results extend to all points in the halfplane .  "
},
{
  "id": "theorem-19",
  "level": "2",
  "url": "section-14.html#theorem-19",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "Weierstrass theorem for series.",
  "body": "Weierstrass theorem for series  Let be a sequence of holomorphic functions on a domain , and assume that converges uniformly on every closed and bounded subset of . Then  is holomorphic on .  For any , the series of th derivatives converges on and converges uniformly and absolutely on every closed and bounded subset of to the function . That is, the derivative of the limit is the limit of the derivatives.   "
},
{
  "id": "corollary-3",
  "level": "2",
  "url": "section-14.html#corollary-3",
  "type": "Corollary",
  "number": "3.2.4",
  "title": "Corollary to Theorem 3.2.2.",
  "body": "Corollary to  For , and is holomorphic.  "
},
{
  "id": "p-168",
  "level": "2",
  "url": "section-14.html#p-168",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Basel problem "
},
{
  "id": "theorem-20",
  "level": "2",
  "url": "section-14.html#theorem-20",
  "type": "Theorem",
  "number": "3.2.5",
  "title": "Basel problem.",
  "body": "Basel problem     "
},
{
  "id": "p-172",
  "level": "2",
  "url": "section-14.html#p-172",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infinite product "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "section-14.html#definition-7",
  "type": "Definition",
  "number": "3.2.6",
  "title": "",
  "body": " An infinite product with no zero factors is convergent if and only if there exists some real number so that as . In this case, is the value of the product. If such , then diverges to 0. If there are infinitely many zero factors , then diverges to 0. If there are finitely many zero factors , then .  "
},
{
  "id": "theorem-21",
  "level": "2",
  "url": "section-14.html#theorem-21",
  "type": "Theorem",
  "number": "3.2.7",
  "title": "",
  "body": " Let be a sequence of positive real numbers. Then the infinite product converges if and only if the series converges.  "
},
{
  "id": "proof-12",
  "level": "2",
  "url": "section-14.html#proof-12",
  "type": "Proof",
  "number": "3.2.2.1",
  "title": "",
  "body": " Apply the logarithm to the product. The series will converge if and only if the product does. Now note that (by L'Hospital or observation of the power series for ). If does not tend to zero, the sum, and thus the product, will diverge by the test for divergence. So assume . Then, as the limit comparison test gives that converges if and only if converges, which establishes the claim.  "
},
{
  "id": "lemma-1",
  "level": "2",
  "url": "section-14.html#lemma-1",
  "type": "Lemma",
  "number": "3.2.8",
  "title": "Absolutely convergent products.",
  "body": "Absolutely convergent products  Let be a sequence of complex numbers so that . Then converges (absolutely). Furthermore, this product is zero if and only if one of the factors is zero.  "
},
{
  "id": "proof-13",
  "level": "2",
  "url": "section-14.html#proof-13",
  "type": "Proof",
  "number": "3.2.2.2",
  "title": "",
  "body": " Because converges, the test for divergence gives . Then there exists an so that the tail of the sequence is contained in the disk for . Factor the product into Convergence of the whole product will then be equivalent to convergence of . Because the tail is away from the origin, we can apply the standard branch of the complex logarithm, , on and write Now, Similarly to the argument in the previous proof, note that the power series for is , and so by the limit comparison test, is absolutely convergent. On application of the complex exponential, we conclude that converges to .  "
},
{
  "id": "thm-prod-M",
  "level": "2",
  "url": "section-14.html#thm-prod-M",
  "type": "Theorem",
  "number": "3.2.9",
  "title": "<span class=\"process-math\">\\(M\\)<\/span>-test, product form.",
  "body": "-test, product form  Let be a set, and for all let be a bounded function. If for some finite we have then the partial products converge uniformly to on .  "
},
{
  "id": "p-183",
  "level": "2",
  "url": "section-14.html#p-183",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler product formula "
},
{
  "id": "theorem-23",
  "level": "2",
  "url": "section-14.html#theorem-23",
  "type": "Theorem",
  "number": "3.2.10",
  "title": "Fundamental theorem of arithmetic.",
  "body": "Fundamental theorem of arithmetic  Every natural number has a unique representation as a product where the product is over the primes and the exponents , only finitely many of which are non-zero.  "
},
{
  "id": "theorem-24",
  "level": "2",
  "url": "section-14.html#theorem-24",
  "type": "Theorem",
  "number": "3.2.11",
  "title": "Product formula for <span class=\"process-math\">\\(\\zeta\\text{.}\\)<\/span>.",
  "body": "Product formula for .  For with , we have where the product is taken over the primes . This representation is absolutely convergent.  "
},
{
  "id": "proof-14",
  "level": "2",
  "url": "section-14.html#proof-14",
  "type": "Proof",
  "number": "3.2.3.1",
  "title": "",
  "body": " For each , we have which we can formally rearrange as  Now, we're going to build from the bottom. Given , let be the set of natural numbers with prime factorization containing primes no larger than and exponents no greater than . That is, has a representation and . The first observation to make is that as , .  The next step is a combinatorial observation. To illustrate, suppose that and . Then Now let , so that we're picking up numbers with in the prime factorization. Here's where we see the pattern we're interested in show up. If you see what's happening here, it shouldn't be hard to believe that for all .  Now, we'll take a look at what happens to this sum as . As , the first observation to make is that the sums by the geometric series formula.  "
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
